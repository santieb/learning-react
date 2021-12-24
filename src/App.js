import react from 'react';
import './App.css';

/* const HelloWorld = (props) => {
  return (
    <div id="hello">
      <h3>{props.title}</h3>
      {props.mytext}
    </div>
  )
} */

class HelloWorld extends react.Component {
  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.title}</h3>
          <p>{this.props.mytext}</p>
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    }
    else return (
      <h1>
        The are not elements
        <button onClick={this.toggleShow}>ToggleShow</button>
      </h1>
    )
  }
}

const App = () => {
  return (
    <div>
      this is my component:
      <HelloWorld mytext="Hello santi" title="component 1" />
      <HelloWorld mytext="Hola mundo" title="component 2" />
      <HelloWorld mytext="Hello!!" title="component 3" />
    </div>
  );
}

export default App;
