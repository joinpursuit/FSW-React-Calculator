import React from "react";
import ButtonPad from "./components/buttons";
import "./App.css";
import { render } from "react-dom";
import "./master.css";

class App extends React.Component {
  state = {
    currentValue: "",
    prevValue: "",
    operation: "",
    answer: ""
  };

  handleChange = e => {
    let input = e.target.value;
    this.setState(prevState => ({
      currentValue: prevState.currentValue + input
    }));
    if (this.state.operation !== "") {
      this.setState(prevState => ({
        prevValue: prevState.currentValue,
        currentValue: input
      }));
    }
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
    if (this.currentValue.length > 10) {
    } else {
      this.setState({
        currentValue: "ERR"
      });
    }
  };

  render() {
    // console.log(this.state);
    // console.log(this.state.test);

    return (
      <div className="App">
        <ButtonPad
          handleChange={this.handleChange}
          currentValue={this.state.currentValue}
          handleOperation={this.handleOperation}
          handleClear={this.handleClear}
          limitAnswer={this.limitAnswer}
        />
      </div>
    );
  }
}

export default App;
