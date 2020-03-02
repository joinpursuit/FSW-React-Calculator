import React from "react";
import ButtonPad from "./components/buttons";
import "./App.css";
import { render } from "react-dom";
import "./master.css";
import { evaluate } from "mathjs";

class App extends React.Component {
  state = {
    currentValue: "",
    prevValue: "",
    operation: "",
    answer: ""
  };

  handleChange = e => {
    let input = e.target.value;
    if (this.state.operation !== "") {
      this.setState(prevState => ({
        prevValue: prevState.currentValue,
        currentValue: input
      }));
    } else if (this.state.currentValue.length >= 4) {
      let comma = this.state.currentValue;
      this.setState({
        currentValue: comma.toLocaleString()
      });
    } else {
      this.setState(prevState => ({
        currentValue: prevState.currentValue + input
      }));
    }
  };

  handleEqual = () => {
    let evaluation = eval(
      `${this.state.prevValue} ${this.state.operation} ${this.state.currentValue}`
    );
    this.setState({
      currentValue: eval(evaluation)
    });
  };

  handleOperation = e => {
    if (e.target.value === "x") {
      this.setState({
        operation: "*"
      });
    } else {
      this.setState({
        operation: e.target.value
      });
    }
  };

  handleClear = () => {
    this.setState({
      currentValue: "",
      prevValue: "",
      operation: "",
      answer: ""
    });
  };

  //this function aims to limit characters shown on "screen" to 10 digits
  limitAnswer = () => {
    let stateValue = this.state.currentValue;
    if (stateValue.length > 10) {
      this.setState({
        currentValue: ""
      });
    } else {
      this.setState({
        currentValue: stateValue
      });
    }
  };

  handleNegs = () => {
    let neg = -Math.abs(
      `${this.state.prevValue} ${this.state.operation} ${this.state.currentValue}`
    );
    this.setState({
      currentValue: -Math.abs(neg)
    });
  };

  // watchForCommas = () => {
  //   let str = this.state.currentValue;
  //   if (str.length >= 4) {
  //     return str.toLocaleStr();
  //   }
  //   this.setState({
  //     currentValue: this.watchForCommas(str)
  //   });
  // };

  render() {
    // console.log(this.state.currentValue.length);
    // console.log(this.state.currentValue);

    return (
      <>
        <div className="App">
          <ButtonPad
            handleChange={this.handleChange}
            currentValue={this.state.currentValue}
            handleOperation={this.handleOperation}
            handleClear={this.handleClear}
            limitAnswer={this.limitAnswer}
            handleEqual={this.handleEqual}
            handleNegs={this.handleNegs}
          />
        </div>
      </>
    );
  }
}

export default App;
