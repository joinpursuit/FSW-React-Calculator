import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    previousDisplay: "",
    operation: "",
    display: "0",
    sign: "positive",
    history: "",
  };

  handleDigit = (userInput) => {
    const { display, operation } = this.state;
    if (operation === "=") {
      // debugger
      this.setState({
        history: "",
        display: userInput,
        operation: ""
      });
    } else if (display === "0") {
      this.setState({
        display: userInput,
        history: userInput,
      });
    } else if (operation === "") {
      this.setState((prevState) => ({
        display: prevState.display + userInput,
        history: prevState.history + userInput,
      }));
    } else if (operation.length === 1) {
      this.setState((prevState) => ({
        display: prevState.display + userInput,
        history: prevState.history + userInput,
      }));
    }
  };

  handleOperand = (userInput) => {
    const { display } = this.state;
    this.setState((prevState) => ({
      operation: userInput,
      history: prevState.display + userInput,
      previousDisplay: display,
      display: "",
    }));
  };

  handleEqual = () => {
    const { previousDisplay, display, operation } = this.state;
    // add check for commas(,)
    this.setState((prevState) => ({
      previousDisplay: "",
      history: prevState.history + "=",
      operation: "=",
    }));
    switch (operation) {
      case "+":
        this.setState({
          display: Number(previousDisplay) + Number(display),
        });
        break;
      case "-":
        this.setState({
          display: Number(previousDisplay) - Number(display),
        });
        break;
      case "x":
        this.setState({
          display: Number(previousDisplay) * Number(display),
        });
        break;
      case "÷":
        this.setState({
          display: Number(previousDisplay) / Number(display),
        });
        break;
      default:
        break;
    }
  };

  handleDecimal = () => {
    const { previousDisplay } = this.state;
    if (!previousDisplay.includes(".")) {
      this.setState((prevState) => ({
        previousDisplay: prevState.previousDisplay + ".",
        display: prevState.display + ".",
        history: prevState.history + ".",
      }));
    }
  };

  handleDelete = () => {
    const { previousDisplay, display, history } = this.state;
    if (display.length === 1) {
      this.setState({
        previousDisplay: "",
        operation: "",
        display: "0",
        history: "",
      });
    } else {
      this.setState({
        previousDisplay: previousDisplay.slice(0, -1),
        display: display.slice(0, -1),
        history: history.slice(0, -1),
      });
    }
  };

  handleAllClear = () => {
    this.setState({
      previousDisplay: "",
      display: "0",
      history: "",
      operation: "",
      sign: "positive",
    });
  };

  handleSign = () => {
    const { sign, previousDisplay, history, display } = this.state;
    if (sign === "positive") {
      this.setState({
        sign: "negative",
        previousDisplay: previousDisplay * -1,
        display: display * -1,
        history: history * -1,
      });
    } else {
      this.setState({
        sign: "positive",
        previousDisplay: previousDisplay * -1,
        display: display * -1,
        history: history * -1,
      });
    }
    // }
  };

  handleZero = () => {
    const { display } = this.state;
    if (display !== "0") {
      this.setState((prevState) => ({
        display: prevState.display + "0",
        history: prevState.history + "0",
      }));
    }
  };

  render() {
    const { display, history } = this.state;
    return (
      <section id="calculator">
        <p id="history">{history}</p>
        <p id="display">{display}</p>
        <button className="one" onClick={() => this.handleDigit("1")}>
          1
        </button>
        <button className="two" onClick={() => this.handleDigit("2")}>
          2
        </button>
        <button className="three" onClick={() => this.handleDigit("3")}>
          3
        </button>
        <button className="four" onClick={() => this.handleDigit("4")}>
          4
        </button>
        <button className="five" onClick={() => this.handleDigit("5")}>
          5
        </button>
        <button className="six" onClick={() => this.handleDigit("6")}>
          6
        </button>
        <button className="seven" onClick={() => this.handleDigit("7")}>
          7
        </button>
        <button className="eight" onClick={() => this.handleDigit("8")}>
          8
        </button>
        <button className="nine" onClick={() => this.handleDigit("9")}>
          9
        </button>
        <button className="zero" onClick={this.handleZero}>
          0
        </button>
        <button className="plus" onClick={() => this.handleOperand("+")}>
          +
        </button>
        <button className="minus" onClick={() => this.handleOperand("-")}>
          -
        </button>
        <button className="divide" onClick={() => this.handleOperand("÷")}>
          ÷
        </button>
        <button className="multiply" onClick={() => this.handleOperand("x")}>
          x
        </button>
        <button className="decimal" onClick={this.handleDecimal}>
          .
        </button>
        <button className="allClear" onClick={this.handleAllClear}>
          AC
        </button>
        <button className="delete" onClick={this.handleDelete}>
          DEL
        </button>
        <button className="sign" onClick={this.handleSign}>
          +/-
        </button>
        <button className="equal" onClick={this.handleEqual}>
          =
        </button>
      </section>
    );
  }
}

export default Calculator;
