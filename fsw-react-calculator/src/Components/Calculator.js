import React from "react";
import Buttons from "./Buttons";
import "../calculator.css"

class Calculator extends React.Component {
  state = { display: "0", userNum1: "", userNum2: "", operator: "", justEvaluated: false};

  enterNum = (num) => {
    this.setState((prevState) => {
      let newDisplay;
      if (prevState.display === "0" || prevState.justEvaluated) {
        newDisplay = num;
      } else {
        newDisplay = prevState.display + num;
      }
      return {
        display: newDisplay,
        userNum2: newDisplay,
        justEvaluated: false
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
  multiplication = (multiplication) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        display: "",
        operator: multiplication,
      };
    });
  };
  division = (division) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        display: "",
        operator: division,
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
      } else if (prevState.operator === "multiplication") {
        total = Number(prevState.userNum1) * Number(prevState.userNum2);
      } else if (prevState.operator === "division") {
        total = Number(prevState.userNum1) / Number(prevState.userNum2);
      }
      return {
        display: total,
        justEvaluated: true
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
      <div className="calculator-div">
        <Buttons
          displayString={Number(display).toLocaleString()}
          enterNum={this.enterNum}
          addition={this.addition}
          subtraction={this.subtraction}
          multiplication={this.multiplication}
          division={this.division}
          posNegButton={this.posNegButton}
          equals={this.equals}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default Calculator;
