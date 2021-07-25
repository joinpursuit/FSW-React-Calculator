
import React, { Component } from "react";
import Tot from "./Total";
import Cal from "./Calculator";
import "./App.css";

export default class App extends Component {
  state = {
    result: "",
  };

  select = (buttonN) => {
    if (buttonN === "=") {
      this.math();
    } else if (buttonN === "AC") {
      this.reset();
    } else if (buttonN === "Delete") {
      this.delete();
    } else if (buttonN === "%") {
      this.percent();
    } else if (buttonN === "+/-") {
      this.posneg();
    } else
      this.setState({
        result: this.state.result + buttonN,
      });
  };
  posneg = () => {
    this.setState({
      result: parseInt(this.state.result) * -1,
    });
  };
  percent = () => {
    this.setState({
      result: this.state.result / 100,
    });
  };
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  reset = () => {
    this.setState({
      result: "",
    });
  };
  //math
  math = () => {
    try {
      this.setState({
        result: Math.round((eval(this.state.result) || "")) + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  render() {
    return (
      <div className="App">
            <h1>Yesi's Calculator</h1>
        <div className="calc">
          <Tot result={this.state.result} />
          <Cal select={this.select} />
        </div>
      </div>
    );
  }
}