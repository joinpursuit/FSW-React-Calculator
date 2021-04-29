import React from "react";
import "./App.css";
import Display from "./components/display";
import Keypad from "./components/keypad";

class App extends React.Component {
  state = {numbers: '0'}

  handleClick = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => {
    return {numbers: prevState.numbers + value}
    })
  }

  render() {
    return (
      <div className="App">
        <Display numbers={this.state.numbers} />
        <Keypad handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
