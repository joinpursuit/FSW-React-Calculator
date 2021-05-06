import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = { userNumInput: "", operation: "", total: "0", sign: "positive" };

  handleAllClear = () => {
    this.setState({ userNumInput: "", total: "0", operation: "" });
  };

  handleOperand = (userInput) => {
    const { userNumInput, operation } = this.state;
    if (operation !== "") {
      this.setState({ operation: userInput });
    } else {
      this.setState({
        total: userNumInput,
        operation: userInput,
        userNumInput: "",
      });
    }
  };

  handleEqual = () => {
    const { userNumInput, total, operation } = this.state;
    // add check for commas(,)
    this.setState({ userNumInput: "" });
    switch (operation) {
      case "+":
        this.setState({
          total: Number(userNumInput) + Number(total),
        });
        break;
      case "-":
        this.setState({
          total: Number(total) - Number(userNumInput),
        });
        break;
      case "x":
        this.setState({
          total: Number(userNumInput) * Number(total),
        });
        break;
      case "÷":
        this.setState({
          total: Number(total) / Number(userNumInput),
        });
        break;
      default:
        break;
    }
  };

  // userNumInput shows up when typed and not when operand is type
  handleDigit = (userInput) => {
    const { userNumInput } = this.state;
    userNumInput === ""
      ? this.setState({
          userNumInput: userInput,
        })
      : this.setState((prevState) => ({
          userNumInput: prevState.userNumInput + userInput,
        }));
  };

  handleDecimal = () => {
    const { userNumInput } = this.state;
    if (!userNumInput.includes(".")) {
      this.setState((prevState) => ({
        userNumInput: prevState.userNumInput + ".",
      }));
    }
  };

  // add 0 after deleting all numbers
  // error if negative number
  handleDelete = () => {
    const { userNumInput } = this.state;
    if (userNumInput === "") {
      this.setState({
        userNumInput: "",
      });
    } else {
      this.setState({
        userNumInput: userNumInput.slice(0, -1),
      });
    }
  };

  // add condition to remove zero after pressing +/-
  handleSign = () => {
    const { sign, userNumInput } = this.state;
    if (userNumInput !== "") {
      if (sign === "positive") {
        this.setState({
          sign: "negative",
          userNumInput: userNumInput * -1,
        });
      } else {
        this.setState({
          sign: "positive",
          userNumInput: userNumInput * -1 });
      }
    }
  };

  handleZero = () => {
    const { userNumInput } = this.state;
    if (userNumInput !== "0") {
      this.setState((prevState) => ({
        userNumInput: prevState.userNumInput + "0",
      }));
    }
  };

  render() {
    const { userNumInput, total } = this.state;
    return (
      <section id="calculator">
        <p id="previousDisplay">{userNumInput}</p>
        <p id="display">{total}</p>
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
