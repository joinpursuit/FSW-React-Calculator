import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = { userNumInput: "0", operation: "", total: "", sign: "positive" };



  handleAllClear = () => {
    this.setState({ userNumInput: "0" });
    this.setState({ total: "" });
  };

  handleOperand = (userInput) => {
    const { userNumInput, operation } = this.state;
    if (operation !== "") {
      this.setState({ operation: userInput });
    } else {
      this.setState({
        total: userNumInput,
        operation: userInput,
        userNumInput: "0",
      });
    }
  };

  handleEqual = () => {
    const { userNumInput, total, operation } = this.state;
    this.setState({ userNumInput: "0" });
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
        default: break;
    }
  };
  // handleEqual = () => {
  //   // use switch
  //   const { userNumInput, operation, total } = this.state;
  //   // this.setState({ userNumInput: "0" });
  // operation is the expression ???????
  //   if (operation === "+") {
  //     this.setState({
  //       total: Number(userNumInput) + Number(total),
  //     });
  //   } else if (operation === "-") {
  //     this.setState({
  //       total: Number(total) - Number(userNumInput),
  //     });
  //   } else if (operation === "x") {
  //     this.setState({
  //       total: Number(userNumInput) * Number(total),
  //     });
  //   } else if (operation === "÷") {
  //     this.setState({
  //       total: Number(total) / Number(userNumInput),
  //     });
  //   }
  // };

  handleDigit = (userInput) => {
    const { userNumInput } = this.state;
    userNumInput === "0"
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
  handleDelete = () => {
    const { userNumInput } = this.state;
    if (userNumInput === "") {
      this.setState({
        userNumInput: "0",
      });
    } else {
      this.setState({
        userNumInput: userNumInput.slice(0, -1),
      });
    }
  };

  // stop adding sign in front of the number
  handleSign = () => {
    const { sign, userNumInput, total } = this.state;
    if (sign === "positive") {
      this.setState({
        total: userNumInput,
        sign: "negative",
        userNumInput: -Number(userNumInput),
      });
      // this.setState({ userNumInput: "-" + userNumInput})
    } else {
      this.setState({ sign: "positive", userNumInput: total });
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