import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";

class App extends React.Component {
  state = {
    num1: "",
    num2: "",
    sign: "",
    solution: "",
    displayNum: "0"
    // expression: ""
  };
  handleNum = e => {
    e.preventDefault();
    let num = e.target.value;
    console.log(!this.state.num1 && !this.state.num2);

    if (!this.state.num1 && !this.state.num2) {
      this.setState(prevState => ({ num1: num }));
      this.setState(prevState => ({ displayNum: "" + num }));
    } else if (!this.state.sign) {
      this.setState(prevState => ({ num1: prevState.num1 + num }));
      this.setState(prevState => ({ displayNum: prevState.displayNum + num }));
    } else if (this.state.sign) {
      this.setState(prevState => {
        return { num2: prevState.num2 + num };
      });
      this.setState(prevState => ({ displayNum: prevState.num2 }));
    }
  };
  handleClear = e => {
    this.setState({
      num1: "",
      num2: "",
      sign: "",
      solution: "",
      displayNum: "0"
    });
  };

  handleDecimal = e => {
    debugger;
    if (!this.state.num2 && this.state.num1.includes(".")) {
      this.setState(prevState => ({ num1: "." }));
      this.setState(prevState => ({ displayNum: "" + "." }));
    } else if (!this.state.sign) {
      this.setState(prevState => ({ num1: prevState.num1 + "." }));
      this.setState(prevState => ({ displayNum: prevState.displayNum + "." }));
    } else if (this.state.sign) {
      this.setState(prevState => {
        return { num2: prevState.num2 + "." };
      });
      this.setState(prevState => ({ displayNum: prevState.num2 }));
    }
  };
  handleSign = e => {
    if (e.target.value === "+/-") {
      this.handleDecimal();
    } else if (e.target.value === ".") {
      this.handleDecimal();
    } else if (this.state.sign && this.state.num1 && e.target.value === "=") {
      if (this.state.num2) {
        let num = eval(
          `${this.state.num1}${this.state.sign}${this.state.num2}`
        );
        this.setState(prevState => ({ solution: num }));
        // this.setState(prevState => ({ num1: num }));
        this.setState(prevState => ({ displayNum: num }));
        this.setState(prevState => ({ num2: "" }));
      } else {
        let num = eval(
          `${this.state.solution}${this.state.sign}${this.state.num1}`
        );
        this.setState(prevState => ({ solution: num }));
        this.setState(prevState => ({ displayNum: "" + num }));
      }
    } else {
      if (e.target.value === "x") {
        this.setState({ sign: "*" });
      } else if (e.target.value === "÷") {
        this.setState({ sign: "/" });
      } else {
        this.setState({ sign: e.target.value });
      }
    }
  };

  render() {
    console.log("new ");
    console.log("NUM1: " + this.state.num1);
    console.log("SIGN: " + this.state.sign);
    console.log("NUM2: " + this.state.num2);
    console.log("solution: " + this.state.solution);

    return (
      <div className="App">
        <div className="iphone">
          <div className="calculator-container">
            <div className="calculator-display">
              <p id="displayNum">{this.state.displayNum}</p>
            </div>

            <Calculator
              handleNum={this.handleNum}
              handleSign={this.handleSign}
              handleClear={this.handleClear}
              handleDenotion={this.handleDenotion}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
