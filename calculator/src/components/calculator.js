import React from "react";
import Buttons from "./buttons";
import { evaluate } from "mathjs";

class Calculator extends React.Component {
  state = {
    finalVal: "",
    displayedVal: "",
    currentVal: "0",
    prevVal: "",
    opperater: "",
    holdVal: ""
  };
  numButtonsHandler = e => {
    let res = e.target.value;

    if (this.state.opperater !== "") {
      this.setState(prevState => ({
        prevVal: prevState.currentVal,

        holdVal: res,
        currentVal: this.state.holdVal + res
      }));
    } else if (this.state.currentVal === "0") {
      this.setState({
        currentVal: res
      });
    } else {
      this.setState(prevState => ({
        currentVal: prevState.currentVal + res
      }));
    }
  };

  clearButtonHandler = () => {
    if (this.state.prevVal !== undefined) {
      this.setState({
        currentVal: ""
      });
    } else {
      this.setState({
        prevVal: "",
        opperater: "",
        currentVal: "0",
        holdVal: ""
      });
    }
  };
  oppHandler = e => {
    let res = e.target.value;
    this.setState(prevState => ({
      opperater: res,
      finalVal: prevState.currentVal
    }));
  };

  equalHandler = () => {
    const { currentVal, opperater, finalVal } = this.state;
    this.setState({
      currentVal: evaluate(`${finalVal}${opperater}${currentVal}`),
      prevVal: "",
      opperater: "",
      holdVal: "",
      finalVal: ""
    });
  };

  render() {
    console.log(this.state);

    const { currentVal } = this.state;
    return (
      <Buttons
        currentVal={currentVal}
        numButtonsHandler={this.numButtonsHandler}
        clearButtonHandler={this.clearButtonHandler}
        oppHandler={this.oppHandler}
        equalHandler={this.equalHandler}
      />
    );
  }
}

export default Calculator;

// const ran = arr => {
//   let output = [];

//   for (let i = arr.length - 1; i > 0; i--) {
//     output.push(arr[Math.floor(Math.random() * i + 1)]);
//   }
//   return output;
// };

// console.log(ran([1, 2, 3, 4, 5, 6, 7, 8, 9]));
