import React from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";
const numbers = "0123456789";

class App extends React.Component {
  state = {
    result: "0",
    history: [],
    // showResult: [{ value: "" }, { show: true }],
  };

  detectClick = (target) => {
    debugger
    if (typeof this.state.result === "number") {
      this.setState({result: Number(target.name)})
    } else if (target.name === "-/+") {
      
      // this.setState({result: preState.result.positive? preState.result.number: -preState.result.number })
    } else if (numbers.includes(target.name)) {
      this.setState({ result: Number(target.name) });
    } else {
      // this.setState({ result: target });
    }
  };

  calculate = () => {
    console.log("calculate");
  };

  clear = () => {
    // this.setState({result.nu})
  };

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Screen result={result} />
        <Buttons detectClick={this.detectClick} />
      </div>
    );
  }
}

export default App;
