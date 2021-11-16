import { Component } from "react";
import "./App.css";
import Calculator from "./calc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "0",
      previous: "",
      operator: false,
      wait: false,
      submited: false,
    };
  }

  handleNums = (value) => {
    if (this.state.display === "0") {
      this.setState({
        display: value,
        wait: false,
      });
    } else {
      this.setState({
        wait: false,
        display: this.state.display + value,
      });
    }
  };

  handleMods = (value) => {
    switch (value) {
      case "reset":
        this.setState({
          display: "0",
          previous: "",
          operator: false,
          wait: false,
          submited: false,
        });
        break;
      case ".":
        if (this.state.previous.includes(".")) {
          break;
        } else {
          this.setState({
            display: this.state.display + value,
          });
          break;
        }
      case "percent":
        if (this.state.display === "0") {
          break;
        } else {
          this.setState({
            display: Number(this.state.display) * 0.01,
          });
          break;
        }

      case "reverse":
        if (this.state.display === "0") {
          break;
        } else {
          this.setState({
            display: this.state.display * -1,
          });
          break;
        }
    }
  };

  handleOPs = (value) => {
    if (this.state.operator && !this.state.submited) {
      let result = this.calc(
        Number(this.state.display),
        Number(this.state.previous),
        this.state.operator
      );
      this.setState({
        operator: value,
        wait: true,
        previous: result,
        display: "",
        submited: false,
      });
    } else {
      this.setState({
        operator: value,
        previous: this.state.display,
        wait: true,
        display: "",
        submited: false,
      });
    }
  };

  handleEqual = () => {
    if (!this.state.operator && !this.state.submited) {
      this.handleMods("reset");
    } else if (this.state.operator && !this.state.display) {
      this.handleMods("reset");
    } else {
      !this.state.submited
        ? this.setState({ previous: this.state.display })
        : this.setState({ previous: this.state.previous });

      let result = String(
        this.calc(
          Number(this.state.display),
          Number(this.state.previous),
          this.state.operator
        )
      );

      this.setState({
        submited: true,
        display: result,
      });
    }
  };

  calc = (current, previous, operator) => {
    switch (operator) {
      case "+":
        return current + previous;
      case "-":
        if (!this.state.submited) {
          return previous - current;
        } else {
          this.setState({
            submited: false,
          });
          return current - previous;
        }
      case "/":
        if (!this.state.submited) {
          return previous / current;
        } else {
          this.setState({
            submited: false,
          });
          return current / previous;
        }
      case "*":
        return previous * current;
    }
  };

  // format = (num) => {};

  render() {
    return (
      <div className="App">
        <Calculator
          info={this.state}
          handleNums={this.handleNums}
          handleMods={this.handleMods}
          handleOPs={this.handleOPs}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

export default App;
