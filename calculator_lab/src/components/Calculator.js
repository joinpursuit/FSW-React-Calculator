import React, { Component } from "react";
import Input from "./Input";
import Keypad from "./Keypad";
import { evaluate } from "mathjs";

import "../css/Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: "",
    previousValue: "",
    operation: ""
  };

  buttonClicked = buttonName => {
    if (buttonName === "=") {
      this.setState(prevState => {
        return {
          displayValue: evaluate(
            `${prevState.displayValue}${prevState.operation}${prevState.previousValue}`
          ),
          previousValue: "",
          operation: ""
        };
      });
    } else if (
      buttonName === "+" ||
      buttonName === "-" ||
      buttonName === "*" ||
      buttonName === "/"
    ) {
      this.setState(prevState => {
        return {
          displayValue: "",
          previousValue: prevState.displayValue,
          operation: buttonName
        };
      });
      debugger;
    } else if (buttonName === "C") {
      this.setState({ displayValue: "" });
      buttonName = "AC";
    } else if (buttonName === "AC") {
      this.setState({ displayValue: "", previousValue: "", operation: "" });
    } else if (buttonName === "%") {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue / 100 };
      });
    } else if (buttonName === "+/-") {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue * -1 };
      });
    } else {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue + buttonName };
      });
    }
  };

  render() {
    let { displayValue, previousValue, operation } = this.state;
    return (
      <div className={"calculatorContainer"}>
        <div className={"calculatorDisplay"}>
          <Input
            displayValue={displayValue}
            previousValue={previousValue}
            operation={operation}
          />
        </div>
        <Keypad buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

export default Calculator;
