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
    const { displayValue } = this.state;
    if (buttonName === "=") {
      this.equals();
    } else if (
      buttonName === "+" ||
      buttonName === "-" ||
      buttonName === "*" ||
      buttonName === "/"
    ) {
      this.operator(buttonName);
    } else if (buttonName === "C") {
      this.clear();
    } else if (buttonName === "AC") {
      this.allClear();
    } else if (buttonName === "%") {
      this.percent();
    } else if (buttonName === "+/-") {
      this.positiveNegative();
    } else if (buttonName === ".") {
      this.decimal();
    } else if (displayValue.length <= 9) {
      this.setState(prevState => {
        return { displayValue: prevState.displayValue + buttonName };
      });
    } else {
      return;
    }
  };

  equals = () => {
    const { displayValue, previousValue, operation, isPrevious } = this.state;
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
            `${prevState.previousValue}${prevState.operation}${prevState.displayValue}`
          ),
          previousValue: "",
          operation: "",
          isPrevious: false
        };
      });
    }
  };

  operator = buttonName => {
    const { displayValue, previousValue, operation, isPrevious } = this.state;
    if (
      buttonName === "+" ||
      buttonName === "-" ||
      buttonName === "*" ||
      buttonName === "/"
    ) {
      if (
        displayValue === "" &&
        previousValue !== null &&
        operation !== null &&
        isPrevious === true
      ) {
        this.setState(prevState => {
          return {
            previousValue: prevState.previousValue,
            operation: buttonName
          };
        });
      } else if (
        displayValue !== null &&
        previousValue !== null &&
        operation !== null &&
        isPrevious === true
      ) {
        this.setState(prevState => {
          return {
            displayValue: "",
            previousValue: evaluate(
              `${prevState.previousValue}${prevState.operation}${prevState.displayValue}`
            ),
            operation: buttonName,
            isPrevious: true
          };
        });
      } else if (displayValue) {
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
    }
  };

  clear = () => {
    const { displayValue, previousValue, operation, isPrevious } = this.state;
    if (
      displayValue !== "" &&
      previousValue !== null &&
      operation !== null &&
      isPrevious === true
    ) {
      this.setState({ displayValue: "" });
    } else {
      this.setState({
        displayValue: "",
        previousValue: "",
        operation: "",
        isPrevious: false
      });
    }
  };

  allClear = () => {
    this.setState({
      displayValue: "",
      previousValue: "",
      operation: "",
      isPrevious: false
    });
  };

  percent = () => {
    this.setState(prevState => {
      return { displayValue: prevState.displayValue / 100 };
    });
  };

  positiveNegative = () => {
    this.setState(prevState => {
      return { displayValue: prevState.displayValue * -1 };
    });
  };

  decimal = () => {
    const { displayValue, isPrevious } = this.state;
    if (isPrevious) {
      this.setState(prevState => {
        return {
          displayValue: prevState.displayValue + ".",
          isPrevious: false
        };
      });
    } else if (displayValue.indexOf(".") === -1) {
      this.setState({ displayValue: displayValue + "." });
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
