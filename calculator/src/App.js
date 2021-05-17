import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentNumber: "",
      operation: "",
      previousNumber: "",
    };
  }

  onOperation = (op) => {
    console.log(op);
    this.setState({ 
      operation: op, 
      previousNumber:this.state.currentNumber,
      currentNumber: "",
    });
  };
  onNumber = (digit) => {
    this.setState({
      currentNumber: this.state.currentNumber + digit
    });
  };

  calculate = () => {
    const { operation, currentNumber, previousNumber } = this.state;
    const current = parseFloat(currentNumber)
    const prev= parseFloat(previousNumber)
    if (operation === "-") {
      this.setState({ currentNumber: prev - current});
    }
    if (operation === "+") {
      this.setState({currentNumber: prev + current})
      console.log(prev + current);
    }
    if (operation === "/") {
      this.setState({currentNumber:prev / current})
    }
    if (operation === "*") {
      this.setState({currentNumber:prev * current})
    } 
  };

  clear = () => {
    this.setState({ previousNumber: "", currentNumber: "", operation: "" });
  };

  render() {
    const { operation, currentNumber, previousNumber } = this.state;
    console.log(previousNumber, operation, currentNumber);
    return (
      <div className="App">
        <div className="Calculator">
          <section className="Results">{currentNumber}</section>
          <section className="Keypad">
            <button onClick={this.clear}>AC</button>
            <button value="+/-" onClick={() => this.posneg}>
              +/-
            </button>
            <button value="%">%</button>
            <button value="+" onClick={() => this.onOperation("/")}>
              ÷
            </button>
            <button value="7" onClick={() => this.onNumber("7")}>
              7
            </button>
            <button value="8" onClick={() => this.onNumber("8")}>
              8
            </button>
            <button value="9" onClick={() => this.onNumber("9")}>
              9
            </button>
            <button value="x" onClick={() => this.onOperation("x")}>
              x
            </button>
            <button value="4" onClick={() => this.onNumber("4")}>
              4
            </button>
            <button value="5" onClick={() => this.onNumber("5")}>
              5
            </button>
            <button value="6" onClick={() => this.onNumber("6")}>
              6
            </button>
            <button value="-" onClick={() => this.onOperation("-")}>
              -
            </button>
            <button value="1" onClick={() => this.onNumber("1")}>
              1
            </button>
            <button value="2" onClick={() => this.onNumber("2")}>
              2
            </button>
            <button value="3" onClick={() => this.onNumber("3")}>
              3
            </button>
            <button value="+" onClick={() => this.onOperation("+")}>
              +
            </button>
          </section>
          <section className="KeypadLR">
            <button value="0" onClick={() => this.onNumber("0")}>
              0
            </button>
            <button value="." className="btn">
              .
            </button>
            <button value="=" onClick={this.calculate}>
              =
            </button>
          </section>
        </div>
      </div>
    );
  }
}
