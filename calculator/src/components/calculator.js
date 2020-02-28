import React from "react";
import Buttons from "./buttons";

class Calculator extends React.Component {
  state = {
    displayedVal: "",
    currentVal: "",
    prevVal: "",
    opperater: ""
  };
  numButtonsHandler = e => {
    let res = e.target.value;

    this.setState(prevState => ({
      currentVal: prevState.currentVal + res
    }));
  };

  clearButtonHandler = () => {
    if (this.state.prevVal !== undefined) {
      this.setState({
        currentVal: ""
      });
    } else {
      this.setState({
        prevVal: ""
      });
    }
  };

  render() {
    const { currentVal } = this.state;
    return (
      <Buttons
        currentVal={currentVal}
        numButtonsHandler={this.numButtonsHandler}
        clearButtonHandler={this.clearButtonHandler}
      />
    );
  }
}

export default Calculator;
