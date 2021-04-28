import React, { Component } from "react";
import Tot from "./Total";
import Cal from "./Calculator";
import "./App.css";

export default class App extends Component {
  //results beggining stage
  state = {
    result: "",
  };
  //results after number clicked
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
  //positive and negitive intigers
  posneg = () => {
    this.setState({
      result:  Math.abs(-this.state.result)
    });
  };
  //percent
  percent = () => {
    this.setState({
      result: this.state.result / 100,
    });
  };
  //delete
  delete = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  //reset
  reset = () => {
    this.setState({
      result: "",
    });
  };
  //math
  math = () => {
    try {
      this.setState({
        result: eval(this.state.result),
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
        <div className="calc">
          <Tot result={this.state.result} />
          <Cal select={this.select || 0} />
        </div>
      </div>
    );
  }
}
