import React from "react";
import "./App.css";
import KeyPad from "./Components/KeyPad";

class App extends React.Component {
  state = { result: "" };

  handleNum = (value) => {
    this.setState({ result: this.state.result + value });
  };

  handleZero = (value) => {
    if (this.state.result !== "") {
      this.setState({ result: this.state.result + value });
    }
  }

  handleOperator = (value) => {
    const { result } = this.state;
    if (value === "+/-") {
      this.setState({ result: result * -1 });
    } else if (value === "AC") {
      this.setState({ result: "" });
    } else if (value === "+") {
      this.adder();
    } else {
      this.setState({
        result: result + value,
      });
      debugger;
    }
  };

  adder = (value) => {
    this.setState({result: this.state.result + ""});
  };

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <KeyPad
          handleZero={this.handleZero}
          handleOperator={this.handleOperator}
          handleNum={this.handleNum}
          result={result}
        />
      </div>
    );
  }
}

export default App;
