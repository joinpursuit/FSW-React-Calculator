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

  format = (num) => {
    let modify = this.numberF(num);
    if (modify.slice(-2) === ".0") {
      return modify;
    } else {
      modify = new Intl.NumberFormat().format(modify);
      return modify;
    }
  };

  numberF = (num) => {
    let strnum = String(num).replace(/\,/g, "");
    return strnum;
  };

  handleNums = (value) => {
    if (this.state.display === "0") {
      this.setState({
        display: value,
        wait: false,
      });
    } else {
      this.setState({
        wait: false,
        display: this.format(this.state.display + value),
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
        if (this.state.display.includes(".")) {
          break;
        } else {
          this.setState({
            display: this.numberF(this.state.display + value),
          });
          break;
        }
      case "percent":
        if (this.state.display === "0") {
          break;
        } else {
          this.setState({
            display: this.format(
              Number(this.numberF(this.state.display)) * 0.01
            ),
          });
          break;
        }

      case "reverse":
        if (this.state.display === "0") {
          break;
        } else {
          this.setState({
            display: this.format(Number(this.numberF(this.state.display)) * -1),
          });
          break;
        }
    }
  };

  handleOPs = (value) => {
    if (this.state.operator && !this.state.submited) {
      let result = this.format(
        this.calc(
          Number(this.numberF(this.state.display)),
          Number(this.numberF(this.state.previous)),
          this.state.operator
        )
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

      let result = this.format(
        this.calc(
          Number(this.numberF(this.state.display)),
          Number(this.numberF(this.state.previous)),
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

  handleKeyDown = (event) => {
    console.log(event.key);
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.handleNums(event.key);
        break;
      case "*":
      case "x":
      case "/":
      case "+":
      case "-":
        this.handleOPs(event.key);
        break;
      case "Enter":
      case "=":
        this.handleEqual();
        break;
      case ".":
        this.handleMods(".");
        break;
      case "%":
        this.handleMods("%");
        break;
      case "Backspace":
      case "c":
        this.handleMods("reset");
        break;
      default:
        break;
    }
  };

  // componentDidMount(){}

  // componentWillUnmount(){}

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyDown}>
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
