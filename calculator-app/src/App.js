import React, { Component } from "react"
import Screen from "./Components/Screen"
import Buttons from "./Components/Buttons"
import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      displayValue: "0",
      currentValue: "",
      prevValue: "",
      result: "0",
    }
  }
  
  handleDisplay = (e) => {
    this.setState({ currentValue: this.state.currentValue.concat(e.target.value), displayValue: Number(this.state.currentValue.concat(e.target.value)).toLocaleString() })
  }
  
  handleNegative = () =>{
    this.setState({ displayValue: this.state.displayValue * -1})
  }
  
  handleOperation = (e) => {
    if(e.target.value === "+"){
      this.setState({ prevValue: this.state.currentValue, result: Number(this.state.prevValue)+Number(this.state.currentValue), currentValue: ""})
    } else if (e.target.value === "-") {
      this.setState({ prevValue: this.state.currentValue, result: Number(this.state.prevValue)-Number(this.state.currentValue), currentValue: ""})
    } else if(e.target.value === "*"){
      this.setState({ prevValue: this.state.currentValue, result: Number(this.state.prevValue)*Number(this.state.currentValue), currentValue: ""})
    } else if(e.target.value === "/"){
      this.setState({ prevValue: this.state.currentValue, result: Math.round(Number(this.state.prevValue)/Number(this.state.currentValue)), currentValue: ""})
    }
  }

  handleResult = () => {
    this.setState({displayValue: this.state.result, currentValue: "", prevValue: ""})
  }

  handleReset = () => {
    this.setState({ displayValue: "0", currentValue: "", prevValue: "", operation: "", result: "0" })
  }

  render() {
    return (
      <div className="calc">
        <Screen displayValue={this.state.displayValue} />
        <Buttons handleDisplay={this.handleDisplay} handleNegative={this.handleNegative} handleReset={this.handleReset} handleOperation={this.handleOperation} handleResult={this.handleResult}/>
      </div>
    )
  }
}

export default App
