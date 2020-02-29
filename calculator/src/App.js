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
    if (this.state.operation !== "") {
      this.setState(prevState => ({
        currentValue: prevState.currentValue + input
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

  render() {
    console.log(this.state);
    // console.log(this.state.test);

    return (
      <div className="App">
        <ButtonPad
          handleChange={this.handleChange}
          currentValue={this.state.currentValue}
          handleOperation={this.handleOperation}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
