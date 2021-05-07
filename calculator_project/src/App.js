import Calculator from "./components/Calculator";
import Calculation from "./components/Calculation";
import React from "react";
import "./App.css";

class App extends React.Component {

  state = { input: "", prevNum: "", startNewNum: true, operator: "" };

  handleButton = (e) => {
    const {value} = e.target
      if(this.state.startNewNum) {
        this.setState({input: value, startNewNum: false})
      } else {
        console.log("else")
        this.setState({input: this.state.input + value})
      }
  };


  handleZero = (e) => {
    const {value} = e.target;
    const {input} = this.state;
    if(input !== "") {
      this.setState({input: input + value})
    } 
  }
  
  handleOperation = (e) => {
    const {value} = e.target;
    this.setState({startNewNum: true, prevNum: this.state.input, operator: value})
  }

  handleDecimal = (e) => {
    const {value} = e.target;
    const {input} = this.state;
    if(!input.includes(value)) {
      this.setState({input: input + value })
    }
  }

  handlePercentage = (e) => {
    const {value} = e.target;
    this.setState({input: this.state.input / 100})
  }

  handleClear = (e) => {
    const {value} = e.target;
    if(value === "A/C") {
      this.setState({input: "", prevNum: "", operator: "", startNewNum: true})
    } if(value === "C") {
      this.setState({input: "", prevNum: "", operator: "", startNewNum: true})
    }
  }

  calculate = (e) => {
    const {value} = e.target;
    if(this.state.operator === "+") {
      this.setState({input: parseFloat(this.state.input) + parseFloat(this.state.prevNum), startNewNum: true})
    } else if(this.state.operator === "-") {
      this.setState({input:  parseFloat(this.state.prevNum) - parseFloat(this.state.input), startNewNum: true})
    } else if(this.state.operator === "x") {
      this.setState({input:  parseFloat(this.state.prevNum) * parseFloat(this.state.input), startNewNum: true})
    }else if(this.state.operator === "/") {
      this.setState({input:  parseFloat(this.state.prevNum) / parseFloat(this.state.input), startNewNum: true})
    }
  }

  render() {
    return (
      <div className="App">
        <Calculator handleButton={this.handleButton} handleClear={this.handleClear} handlePosNeg={this.handlePosNeg} handleOperation={this.handleOperation} input={this.state.input} handleDecimal={this.handleDecimal} handlePercentage={this.handlePercentage} handleZero={this.handleZero} calculate={this.calculate}/>
        <Calculation input={this.state.input} />
      </div>
    );
  }
}

export default App;
