import { Component } from "react";
import React from "react";
import "./App.css";
import ButtonsComp from "./components/ButtonsComp";
import AnswerDisp from "./components/AnswerDisp";

class App extends Component {
  constructor() {
    super();

    this.state = {
      outcome: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        outcome: this.state.outcome + button,
      });
    }
  };

  calculate = () => {
    var checkOutcome = "";
    if (this.state.outcome.includes("--")) {
      checkOutcome = this.state.outcome.replace("--", "+");
    } else {
      checkOutcome = this.state.outcome;
    }

    try {
      this.setState({
        outcome: (eval(checkOutcome) || "") + "",
      });
    } catch (e) {
      this.setState({
        outcome: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      outcome: "",
    });
  };

  backspace = () => {
    this.setState({
      outcome: this.state.outcome.slice(0, -1),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="pursuit-instrument">
          <h1>Pursuit Instruments</h1>

          <AnswerDisp outcome={this.state.outcome} />
          <ButtonsComp onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
