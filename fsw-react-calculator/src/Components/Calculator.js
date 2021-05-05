import React from "react";
import Buttons from "./Buttons";

class Calculator extends React.Component {
  state = { display: "0", userNum1: "", userNum2: "", operator: "" };

  enterNum = (num) => {
    this.setState((prevState) => {
      let newDisplay;
      if (prevState.display === "0") {
        newDisplay = num;
      } else {
        newDisplay = prevState.display + num;
      }
      return {
        display: newDisplay,
        userNum2: newDisplay,
      };
    });
  };

  addition = (addition) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        display: "",
        operator: addition,
      };
    });
  };
  subtraction = (subtraction) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        display: "",
        operator: subtraction,
      };
    });
  };

  equals = () => {
    this.setState((prevState) => {
      let total = 0;
      if (prevState.operator === "addition") {
        total = Number(prevState.userNum1) + Number(prevState.userNum2);
      } else if (prevState.operator === "subtraction") {
        total = Number(prevState.userNum1) - Number(prevState.userNum2); 
        debugger
      }
      return {
        display: total,
      };
    });
  };

  clear = () => {
    this.setState((prevState) => {
      return {
        display: "0",
        userNum1: "",
        userNum2: "",
      };
    });
  };
  componentDidUpdate() {
    // debugger;
  }

  posNegButton = () => {
    const { display } = this.state;
    this.setState({ display: Number(display) * -1 });
  };

  render() {
    const { display } = this.state;

    return (
      <div>
        <Buttons
          displayString={Number(display).toLocaleString()}
          enterNum={this.enterNum}
          addition={this.addition}
          subtraction={this.subtraction}
          posNegButton={this.posNegButton}
          equals={this.equals}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default Calculator;
