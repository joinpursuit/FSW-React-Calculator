import "./App.css";
import React, { Component } from "react";
import Buttons from "./Components/Buttons";
import Output from "./Components/Output";

class App extends Component {

  state = {
    result: ''
  }

  buttonPressed = (buttonName) => {
    if(buttonName === "=") {
      this.calculate()
    } else if (buttonName === "AC") {
      this.reset()
    } else if (buttonName === "C") {
      this.backspace()
    } else if (buttonName === "%") {
      this.percent()
    } else if (buttonName === "+-") {
      this.inverse()
    } else 
    this.setState({
      result: this.state.result + buttonName 
    })
  }

  calculate = () => {
    try{
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  percent = () => {
    this.setState({
      result: this.state.result / 100
    })
  }



  render() {
    return (
      <div className="calculator">
        <Output result={this.state.result}/>
        <Buttons buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
