import React from "react";
import "./App.css";
import KeyPad from "./Components/KeyPad";

class App extends React.Component {
  state = {result: ""}

  handleNum = (value) => {
    this.setState({ result: this.state.result + value});
  }

  handleOperator = (value) => {
    if (value === "+/-") {
      this.setState({result: this.state.result * -1})
    }
  }


  render() {
    const {result} = this.state
    return (
      <div className="App">
        <KeyPad handleOperator={this.handleOperator} handleNum={this.handleNum} result={result}/>
      </div>
    );
  }
}

export default App;
