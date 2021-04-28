import React, { Component } from "react"
import Screen from "./Components/Screen"
import Buttons from "./Components/Buttons"
import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      displayValue: "0",
      prevValue: "",
      result: "0",
    }
  }
  
  handleDisplay = (e) => {
    this.setState({ displayValue: Number(this.state.displayValue.concat(e.target.value)).toLocaleString() })
  }
  
  handleNegative = () =>{
    this.setState({ displayValue: this.state.displayValue * -1})
  }
  
  handleOperation = (e) => {
    if(e.target.value === "+"){
      this.setState( prevState => ({ prevValue: prevState.prevValue + e.target.value, displayValue: this.state.prevValue, result: Number(this.state.prevValue).toLocaleString() + Number(this.state.displayValue)} ))
    }
  }

  handleResult = () => {
    this.setState({displayValue: Number(this.state.result).toLocaleString(), prevValue: ""})
  }

  handleReset = () => {
    this.setState({ displayValue: "0", prevValue: "", result: "0" })
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
