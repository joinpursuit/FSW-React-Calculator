import React from "react";
import Buttons from "./buttons";

class Calculator extends React.Component {
  state = {
    displayedVal: "",
    currentVal: "0",
    prevVal: "",
    opperater: ""
  };
  numButtonsHandler = e => {
    let res = e.target.value;

    if (this.state.opperater !== "") {
      this.setState(prevState => ({
        prevVal: prevState.currentVal,
        currentVal: res
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
        currentVal: "0"
      });
    }
  };
  oppHandler = e => {
    this.setState({
      opperater: e.target.value
    });
  };

  render() {
    const { currentVal } = this.state;
    return (
      <Buttons
        currentVal={currentVal}
        numButtonsHandler={this.numButtonsHandler}
        clearButtonHandler={this.clearButtonHandler}
        oppHandler={this.oppHandler}
      />
    );
  }
}

export default Calculator;
