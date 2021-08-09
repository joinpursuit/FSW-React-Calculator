import React from "react";
import Button from "./Components/Button";
import Result from "./Components/Result";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { result: "", operator: "", previousNumber: "", startNewNum: true };
  }
  //right column stuff
  onClick = (symbol) => {
    if (symbol === "=") {
      this.solve();
    } else if (symbol === "AC") {
      this.clear();
    } else if (symbol === "sign") {
      this.switchSign();
    } else {
      //this uses tolocalestring?
      //when I add Number() gets errors and nans
      this.setState({ result: this.state.result + symbol });
    }
  };
  //all clear
  clear = () => {
    this.setState({
      result: "",
    });
  };
  //neg pos toggle
  switchSign = () => {
    this.setState({
      result: this.state.result * -1,
    });
  };
  //calculate inputted expression
  solve = () => {
    let resultCheck = "";
    //handle subtracting neg
    if (this.state.result.includes("--")) {
      resultCheck = this.state.result.replace("--", "+");
    } else {
      resultCheck = this.state.result;
    }

    try {
      this.setState({
        result: (eval(resultCheck) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="body">
        <Result result={this.state.result} />
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
