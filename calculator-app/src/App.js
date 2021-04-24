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
      operation: "",
    }
  }
  

  display = (e) => {
    this.setState({ currentValue: this.state.currentValue.concat(e.target.value), displayValue: this.state.currentValue.concat(e.target.value) })
  }

  negative = (e) =>{
    this.setState({displayValue: e.target.value.concat(this.state.displayValue)})
  }

  handleOperation = (e) => {
    if(e.target.value === "+"){
      alert(`hi`)
    } else if (e.target.value === "-"){
      return this.state.displayValue - this.state.prevValue
    } else if (e.target.value === "*"){
      return this.state.displayValue * this.state.prevValue
    } else if (e.target.value === "/"){
      return this.state.value / this.state.prevValue
    }
  }

  handleResult = (e) => {
    if(e.target.value === "="){

    }
  }

  reset = () => {
    this.setState({displayValue: "0", currentValue: "", prevValue: "", operation: ""})
  }

  render() {
    return (
      <div>
        <Screen displayValue={this.state.displayValue} />
        <Buttons display={this.display} negative={this.negative} reset={this.reset} handleOperation={this.handleOperation} handleResult={this.handleResult}/>
      </div>
    )
  }
}

export default App
