import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = { result: [] };

  handleClick(userInput) {
    const { result } = this.state;
    if (userInput === "=") {
      this.calculate();
    } else if (userInput === "AC") {
      this.setState({
        result: [],
      });
    } else if (userInput === "del") {
      this.setState({
        result: result.slice(0, -1),
      });
    } else {
      this.setState({
        result: result + userInput,
      });
    }
  }

  calculate = () => {
    const { result } = this.state;
    if (result.includes("+")) {
      this.setState({
        result: Number(result[0]) + Number(result[2]),
      });
    } else if (result.includes("-")) {
      this.setState({
        result: Number(result[0]) - Number(result[2]),
      });
    } else if (result.includes("x")) {
      this.setState({
        result: Number(result[0]) * Number(result[2]),
      });
    } else if (result.includes("\u00F7")) {
      this.setState({
        result: Number(result[0]) / Number(result[2]),
      });
    }
  };

  render() {
    const { result } = this.state;
    return (
      <section id="calculator">
        <p id="display">{result}</p>
        <button className="one" onClick={() => this.handleClick("1")}>
          1
        </button>
        <button className="two" onClick={() => this.handleClick("2")}>
          2
        </button>
        <button className="three" onClick={() => this.handleClick("3")}>
          3
        </button>
        <button className="four" onClick={() => this.handleClick("4")}>
          4
        </button>
        <button className="five" onClick={() => this.handleClick("5")}>
          5
        </button>
        <button className="six" onClick={() => this.handleClick("6")}>
          6
        </button>
        <button className="seven" onClick={() => this.handleClick("7")}>
          7
        </button>
        <button className="eight" onClick={() => this.handleClick("8")}>
          8
        </button>
        <button className="nine" onClick={() => this.handleClick("9")}>
          9
        </button>
        <button className="zero" onClick={() => this.handleClick("0")}>
          0
        </button>
        <button className="plus" onClick={() => this.handleClick("+")}>
          +
        </button>
        <button className="minus" onClick={() => this.handleClick("-")}>
          -
        </button>
        <button className="divide" onClick={() => this.handleClick("\u00F7")}>
        ÷
        </button>
        <button className="multiply" onClick={() => this.handleClick("x")}>
          x
        </button>
        <button className="decimal" onClick={() => this.handleClick(".")}>
          .
        </button>
        <button className="allClear" onClick={() => this.handleClick("AC")}>
          AC
        </button>
        <button className="delete" onClick={() => this.handleClick("del")}>
          DEL
        </button>
        <button className="sign" onClick={() => this.handleClick("-")}>
          +/-
        </button>
        <button className="equal" onClick={() => this.handleClick("=")}>
          =
        </button>
      </section>
    );
  }
}

export default Calculator;
