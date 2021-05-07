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
  handleOperation = (e) => {
    const {value} = e.target;
    this.setState({startNewNum: true, prevNum: this.state.input, operator: value})
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
