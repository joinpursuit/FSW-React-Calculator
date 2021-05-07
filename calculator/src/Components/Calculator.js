// 1. What state is there?
// 2. When does it change?

import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    display: "0",
    previousDisplay: "",
    operator: "",
    value: "",
    newNumTracker: false,
  };

  enterNumber = (e) => {
    // debugger;
    this.setState((prevState) => {
      const { display } = prevState;
      if (display === "0") {
        // changing this to just display and not display === 0, fixed the 0 populate inbetween the + sign. It also helped with keeping the digit onscreen.
        // if (display) {
        // debugger
        return {
          display: e.target.value,
        };
      } else {
        debugger
        return {
          display: prevState.display + e.target.value,
        };
      }
    });
  };

  handleClear = () => {
    this.setState({ display: "0", previousDisplay: "" });
  };

  handlePlusSign = () => {
    // debugger
    const { display } = this.state;
    // debugger
    this.setState({
      previousDisplay: display,
      display: "0",
      //there is a link between this display and the conditional in enterNumber
      operator: "plus",
      newNumTracker: true,
    });
  };

  handleEqualSign = () => {
    const { operator, display, value } = this.state;
    console.log("handleEqualSign", display)
    if (operator === "plus") {
      this.setState({ display: this.addNumbers(), previousDisplay: display })
    }
    else if (operator === "minus") {
      this.setState({ display: this.subtractNumbers(), previousDisplay: display });
    }
    else if (operator === "dividedBy") {
      this.setState({ display: this.divideNumbers(), previousDisplay: display })
    }
    else if (operator === "times") {
      this.setState({ display: this.multiplyNumbers(), previousDisplay: display })
    }
    else if (value) {
debugger
      this.setState({ display: value, previousDisplay: ""})
    } 
  };

  handleMinusSign = () => {
    const { display } = this.state;
    this.setState({
      previousDisplay: display,
      display: "",
      operator: "minus",
      newNumTracker: true,
    });
  };

  handleDivisionSign = () => {
    const { display } = this.state;
    this.setState({  previousDisplay: display,
      display: "",
      operator: "dividedBy",
      newNumTracker: true,})
  }

  handleMultiplicationSign = () => {
    const { display } = this.state;
    this.setState({  previousDisplay: display,
      display: "",
      operator: "times",
      newNumTracker: true,})
  }

  handleToggleInteger = () => {
    const { display } = this.state 
    this.setState({ display: -(display) })
  }
  
  // doMath = () => {
  //   const { previousDisplay, display, operator } = this.state;
  //   let result = 0;
  //   if (operator === "plus") {
  //     result = parseInt(previousDisplay) + parseInt(display);
  //     debugger
  //     this.setState({ display: result });
  //   }
  // };

  addNumbers = () => {
    const { previousDisplay, display } = this.state;
    let sum = 0;
    if (display) {
      sum = parseInt(previousDisplay) + parseInt(display);
      //  debugger
    }
    return sum;
  };

  subtractNumbers = () => {
    const { previousDisplay, display } = this.state;
    let difference = 0;
    if (display) {
      difference = parseInt(previousDisplay) - parseInt(display);
    }
    return difference;
  };

  divideNumbers = () => {
    const { previousDisplay, display } = this.state;
    let quotient = 0;
    if (display) {
      quotient = parseInt(previousDisplay) / parseInt(display)
    }
    return quotient
  }

  multiplyNumbers = () => {
    const { previousDisplay, display } = this.state;
    let product = 0;
    if (display) {
      product = parseInt(previousDisplay) * parseInt(display)
    }
    return product
  }

  render() {
    const { display } = this.state;
    console.log("render", display)
    return (
      <div className="Calculator">
        <div className="Display" value={display}>
          {parseInt(display).toLocaleString()}
        </div>
        <button className="TopRow" onClick={this.handleClear} value={0}>
          AC
        </button>
        <button className="TopRow">%</button>
        <button className="Blank"></button>
        <button className="Operator" onClick={this.handleDivisionSign}>÷</button>
        <button className="SecondRow" onClick={this.enterNumber} value={7}>
          7
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={8}>
          8
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={9}>
          9
        </button>
        <button className="Operator" onClick={this.handleMultiplicationSign}>
          x
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={4}>
          4
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={5}>
          5
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={6}>
          6
        </button>
        <button className="Operator" onClick={this.handleMinusSign}>
          -
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={1}>
          1
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={2}>
          2
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={3}>
          3
        </button>
        <button className="Operator" onClick={this.handlePlusSign}>
          +
        </button>
        <button className="BottomRow" onClick={this.enterNumber} value={0}>
          0
        </button>
        <button className="BottomRow">.</button>
        <button className="BottomRow" onClick={this.handleToggleInteger}>±</button>
        <button className="Operator" onClick={this.handleEqualSign}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;

// else if (operator === "equal") {
//   this.setState({ prevDisplay: this.addNumbers() })
// }
