import React, { Component } from "react";
import Input from "./Input";
import Keypad from "./Keypad";

import "../css/Calculator.css";

class Calculator extends Component {
  state = {
    input: ""
  };

  buttonClicked = buttonName => {
    const { input } = this.state;
    if (buttonName === "=") {
      try {
        this.calculate();
      } catch (error) {
        this.setState({ input: "" });
        alert("invalid format");
      }
    } else if (buttonName === "C") {
      this.setState({ input: "" });
    } else if (buttonName === "%") {
      this.setState({ input: eval(input / 100) });
    } else if (buttonName === "+/-") {
      this.setState({ input: eval(input * -1) });
    } else {
      this.setState({ input: input + buttonName });
    }
  };

  calculate = () => {
    const { input } = this.state;
    this.setState({
      input: eval(input)
    });
  };

  render() {
    let { input } = this.state;
    return (
      <div className={"calculatorContainer"}>
        <div className={"calculatorDisplay"}>
          <Input input={input} />
        </div>
        <Keypad buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default Calculator;
