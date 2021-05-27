import React from "react";
import "./Calculator.css";

// fix trailing double zeros

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
      this.setState({
        history: "",
        display: userInput,
        operation: "",
      });
    } else if (display === "0") {
      this.setState({
        display: userInput,
        history: userInput,
      });
    } else {
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
      operandPressed: true,
    }));
  };

  handleEqual = () => {
    const { previousDisplay, display, operation } = this.state;
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
    const { previousDisplay, display, history, operation } = this.state;
    if (display.length === 1) {
      this.setState({
        previousDisplay: "",
        operation: "",
        display: "0",
        history: "",
      });
    } else if (operation === "=") {
      this.setState({
        previousDisplay: "previousDisplay.slice(0, -1)",
        display: "display.slice(0, -1)",
        history: "history.slice(0, -1)",
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

  // finish function
  // formatNumber = () => {
  //   const { display } = this.state;
  //   if(display !== "") {
  //     // parseInt(display).toLocaleString()
  //     display.toLocaleString()

  //   } else {
  //   }
  // }

  render() {
    const { display, history } = this.state;
    return (
      <section id="calculater">
        <div className="Outter-Container"></div>
        <div className="Inner-Container"></div>
        <section id="screen">
          <p id="history">{history}</p>
          <p id="display">{Number(display).toLocaleString()}</p>
          {/* <p id="display">{display}</p> */}
          {/* <p id="display">{this.formatNumber()}</p> */}
        </section>
        <section id="digits">
          <button className="second-row one" onClick={() => this.handleDigit("1")}>
            1
          </button>
          <button className="second-row two" onClick={() => this.handleDigit("2")}>
            2
          </button>
          <button className="second-row three" onClick={() => this.handleDigit("3")}>
            3
          </button>
          <button className="third-row four" onClick={() => this.handleDigit("4")}>
            4
          </button>
          <button className="third-row five" onClick={() => this.handleDigit("5")}>
            5
          </button>
          <button className="third-row six" onClick={() => this.handleDigit("6")}>
            6
          </button>
          <button className="fourth-row seven" onClick={() => this.handleDigit("7")}>
            7
          </button>
          <button className="fourth-row eight" onClick={() => this.handleDigit("8")}>
            8
          </button>
          <button className="fourth-row nine" onClick={() => this.handleDigit("9")}>
            9
          </button>
          <button className="fifth-row zero" onClick={this.handleZero}>
            0
          </button>
          <button className="first-row plus" onClick={() => this.handleOperand("+")}>
            +
          </button>
          <button className="second-row minus" onClick={() => this.handleOperand("-")}>
            -
          </button>
          <button className="fourth-row divide" onClick={() => this.handleOperand("÷")}>
            ÷
          </button>
          <button className="third-row multiply" onClick={() => this.handleOperand("x")}>
            x
          </button>
          <button className="fifth-row decimal" onClick={this.handleDecimal}>
            .
          </button>
          <button className="first-row allClear" onClick={this.handleAllClear}>
            AC
          </button>
          <button className="first-row delete" onClick={this.handleDelete}>
            DEL
          </button>
          <button className="first-row sign" onClick={this.handleSign}>
            +/-
          </button>
          <button className="fifth-row equal" onClick={this.handleEqual}>
            =
          </button>
        </section>
      </section>
    );
  }
}

export default Calculator;
