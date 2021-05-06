// 1. What state is there?
// 2. When does it change?


import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = { display: "0", previousDisplay: "", operator: "", newNumTracker: false };

  enterNumber = (e) => {
    // debugger;
    this.setState((prevState) => {
      const { display } = prevState;
      if (display === "0") {
        // debugger
        return {
          display: e.target.value,
        };
      } else {
        // debugger
        return {
          display: prevState.display + e.target.value,
        };
      }
    });
  };

  handleClear = () => {
    this.setState({ display: "0" });
  };

  handlePlus = (e) => {
    // debugger
    const { display } = this.state
    // debugger
    this.setState({ previousDisplay: display, display: "", operator: "plus", newNumTracker: true })
    // previousDisplay: doesnot allow single digits to be entered
    // this.setState({ display: previousDisplay, operator: "plus", newNumTracker: true })
    // display: previousDisplay causes number in display to disappear once operator is clicked...makes sense since it is set to previousDisplay and prevDis started as an ""
    // debugger
  }
 
  handleEqual = () => {
    // debugger
    const { operator } = this.state;
    // debugger
    if (operator === "plus") {
      // debugger
      this.setState({ display: this.addNumbers() })
      // debugger
      }
    }

    addNumbers = () => {
      const { display, previousDisplay } = this.state;
      let sum = 0;
      if (display) {
       sum = parseInt(previousDisplay) + parseInt(display)
      //  debugger
      }
      return sum
    }

  

  render() {
    const { display } = this.state;
    return (
      <div className="Calculator">
        <div className="Display" value={display}>
          {display}
        </div>
        <button className="TopRow" onClick={this.handleClear} value={0}>
          AC
        </button>
        <button className="TopRow">%</button>
        <button className="Blank"></button>
        <button className="Operator">÷</button>
        <button className="SecondRow" onClick={this.enterNumber} value={7}>
          7
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={8}>
          8
        </button>
        <button className="SecondRow" onClick={this.enterNumber} value={9}>
          9
        </button>
        <button className="Operator">x</button>
        <button className="ThirdRow" onClick={this.enterNumber} value={4}>
          4
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={5}>
          5
        </button>
        <button className="ThirdRow" onClick={this.enterNumber} value={6}>
          6
        </button>
        <button className="Operator">-</button>
        <button className="FourthRow" onClick={this.enterNumber} value={1}>
          1
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={2}>
          2
        </button>
        <button className="FourthRow" onClick={this.enterNumber} value={3}>
          3
        </button>
        <button className="Operator" onClick={this.handlePlus}>
          +
        </button>
        <button className="BottomRow" onClick={this.enterNumber} value={0}>
          0
        </button>
        <button className="BottomRow">.</button>
        <button className="BottomRow">±</button>
        <button className="Operator" onClick={this.handleEqual}>=</button>
      </div>
    );
  }
}

export default Calculator;
