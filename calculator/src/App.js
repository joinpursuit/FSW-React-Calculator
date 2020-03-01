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
    } else {
      this.setState(prevState => ({
        currentValue: prevState.currentValue + input
      }));
    }
  };

  handleEqual = e => {
    let evaluation = eval(
      `${this.state.prevValue} ${this.state.operation} ${this.state.currentValue}`
    );
    this.setState({
      currentValue: eval(evaluation)
    });
  };

  handleOperation = e => {
    this.setState({
      operation: e.target.value
    });
  };

  handleClear = () => {
    this.setState({
      currentValue: "",
      prevValue: "",
      operation: "",
      answer: ""
    });
  };

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
 let neg =  -Math.abs(`${this.state.prevValue} ${this.state.operation} ${this.state.currentValue}`);
  this.setState({
    currentValue: -Math.abs(neg)
  })
  // console.log(neg)
}

  watchForCommas = (str) => {

  }

  render() {
    console.log(this.state.currentValue.length);
    console.log(this.state.currentValue);

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
