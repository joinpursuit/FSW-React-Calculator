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
        userNum2: newDisplay
      };
    });
  };

  addNums = (addition) => {
    this.setState((prevState) => {
      return {
        userNum1: prevState.display,
        display: "",
        operator: addition,
      };
    });
  };

  equals = () => {
    this.setState((prevState) => {
        let total
      if (prevState.operator === "addition"){
          total = Number(prevState.userNum1) + Number(prevState.userNum2)
      }
        return {
          display: total
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
          addNums={this.addNums}
          posNegButton={this.posNegButton}
          equals={this.equals}
        />
     
      </div>
    );
  }
}

export default Calculator;
