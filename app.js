// TODO
var GroceryList = (props) => {

  var styleDiv = {
    border: '1px solid black',
    width: '300px',
    margin: '60px auto'
  }

  var styleH2 = {
    textAlign: 'center',
    fontFamily: 'sans-serif'

  }

  return (<div style={styleDiv}>
    <h2 style={ styleH2 }>GROCERY LIST</h2>
    <TodoList todos={['Cereal', 'Kale', 'Burritos']} />
  </div> )
}


// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
     // `state` is just an object literal
    this.state = {
      done: false,
      hover: false
    }
  };

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  onMouseEnter() {
    this.setState({
      hover: true
    });
  };

  onMouseLeave() {
    this.setState({
      hover: false
    });
  };


  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // Making the style conditional on our `state` lets us 
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
      padding: '3px',
      margin: '3px',
      backgroundColor: this.state.done ? 'white' : this.state.hover ? 'yellow' : '#eee'
    };
    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li onClick={ this.onListItemClick.bind(this) } 
          onMouseEnter={ this.onMouseEnter.bind(this) } 
          onMouseLeave={ this.onMouseLeave.bind(this) } 
          style={style} >{this.props.todo}
      </li>
    );

  }

}


// Here we create a `TodoList` component
var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  // var onListItemClick = (event) => console.log('I got clicked')

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  var styleList = {
    listStyle: 'none',
    padding: '6px'
  }

  return ( <ul style={ styleList }>
              {props.todos.map(todo =>
                <TodoListItem  todo={todo} />
              )}
            </ul>
         )

}

ReactDOM.render(<GroceryList />, document.getElementById('app') );

