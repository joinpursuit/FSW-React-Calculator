import React from "react";
import Buttons from "./buttons";
import { evaluate } from "mathjs";

class Calculator extends React.Component {
  state = {
    finalVal: "",
    holder: "",
    currentVal: "0",
    prevVal: "",
    opperater: "",
    holdVal: "",
    toggle: false
  };

  addComma = () => {
    let output = "";
    if (this.state.currentVal.length > 3) {
      for (let i = 0; i < this.state.currentVal.length; i++) {
        if (i === 1 || i === 4 || i === 7) {
          output += `,${this.state.currentVal[i]}`;
        } else {
          output += this.state.currentVal[i];
        }
      }
    }
    return output;
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
        currentVal: this.addComma()
      });
    } else {
      this.setState(prevState => ({
        currentVal: prevState.currentVal + res
      }));
    }
  };

  clearButtonHandler = () => {
    if (this.state.prevVal !== undefined) {
      this.setState(prevState => ({
        currentVal: "",
        finalVal: "",
        prevVal: prevState.finalVal,
        opperater: "",
        holder: ""
      }));
    } else {
      this.setState({
        prevVal: "",
        opperater: "",
        currentVal: "0",
        holdVal: "",
        finalVal: ""
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
    this.setState(prevState => ({
      currentVal: evaluate(`${finalVal}${opperater}${currentVal}`),
      prevVal: "",
      opperater: prevState.opperater,
      holdVal: "",
      finalVal: prevState.prevVal,
      prevVal: prevState.finalVal
    }));
  };
  toggleHandler = async () => {
    await this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
    if (this.state.toggle !== true) {
      this.setState(prevState => ({
        currentVal: prevState.holder
      }));
    } else {
      this.setState(prevState => ({
        holder: prevState.currentVal,
        currentVal: `-${prevState.currentVal}`
      }));
    }
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
        toggleHandler={this.toggleHandler}
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
