import React from "react";
import "./App.css";
import Display from "./components/display";
import Keypad from "./components/keypad";

class App extends React.Component {

  state = { numbers: 0 };

  handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState((prevState) => {
      return { numbers: [value, ...prevState.numbers]};
    });
  };

  render() {
    return (
      <div className="App">
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default App;
