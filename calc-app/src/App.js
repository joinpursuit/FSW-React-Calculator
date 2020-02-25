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
    displayNum: "",
    expression: ""
  };
  handleNum = e => {
    e.preventDefault();
    let num = e.target.value;
    console.log(!this.state.num1 && !this.state.num2);
    if (!this.state.num1 && !this.state.num2) {
      // this.setState({ num1: num });
      console.log("testing " + this.state.num1);
      debugger;
      this.setState(prevState => {
        return { num1: num };
      });
      this.setState({ displayNum: this.state.num1 });
    } else if (!this.state.sign) {
      this.setState(prevState => {
        return { num1: prevState.num1 + num };
      });
    } else if (this.state.sign && this.state.num1) {
      this.setState(prevState => {
        return { num2: prevState.num2 + num };
      });
    }
  };

  handleSign = e => {
    this.setState({ sign: e.target.value });
  };
  render() {
    console.log("new ");
    console.log(this.state.num1);
    console.log(this.state.sign);
    console.log(this.state.num2);
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="calculator-display">
            <p id="displayNum">{this.state.expression}</p>
          </div>
          <Calculator handleNum={this.handleNum} handleSign={this.handleSign} />
        </div>
      </div>
    );
  }
}

export default App;
