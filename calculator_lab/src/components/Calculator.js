import React, { Component } from "react";
import Input from "./Input";
import Keypad from "./Keypad";
import { evaluate } from "mathjs";

import "../css/Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: "",
    previousValue: "",
    operation: "",
    isPrevious: false
  };

  buttonClicked = buttonName => {
    const { displayValue, previousValue, operation, isPrevious } = this.state;
    if (buttonName === "=") {
      if (
        isPrevious === true &&
        previousValue !== null &&
        operation !== null &&
        displayValue === ""
      ) {
        return;
      } else {
        this.setState(prevState => {
          return {
            displayValue: evaluate(
              `${prevState.displayValue}${prevState.operation}${prevState.previousValue}`
            ),
            previousValue: "",
            operation: "",
            isPrevious: false
          };
        });
      }
    } else if (
      buttonName === "+" ||
      buttonName === "-" ||
      buttonName === "*" ||
      buttonName === "/"
    ) {
      if (displayValue) {
        this.setState(prevState => {
          return {
            displayValue: "",
            previousValue: prevState.displayValue,
            operation: buttonName,
            isPrevious: true
          };
        });
      } else {
        return;
      }
    } else if (buttonName === "C") {
      this.setState({ displayValue: "" });
    } else if (buttonName === "AC") {
      this.setState({
        displayValue: "",
        previousValue: "",
        operation: "",
        isPrevious: false
      });
    } else if (buttonName === "%") {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue / 100 };
      });
    } else if (buttonName === "+/-") {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue * -1 };
      });
    } else if (displayValue.length <= 9) {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue + buttonName };
      });
    } else {
      return;
    }
  };

  render() {
    console.log(this.state);
    let { displayValue, previousValue, operation, isPrevious } = this.state;
    return (
      <div className={"calculatorContainer"}>
        <div className={"calculatorDisplay"}>
          <Input displayValue={displayValue} />
        </div>
        <Keypad
          buttonClicked={this.buttonClicked}
          previousValue={previousValue}
          operation={operation}
          isPrevious={isPrevious}
        />
      </div>
    );
  }
}

export default Calculator;
