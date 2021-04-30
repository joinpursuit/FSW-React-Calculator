import React, { Component } from "react"
import Screen from "./Components/Screen"
import Buttons from "./Components/Buttons"
// import { evaluate } from 'mathjs'
import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      displayValue: "0",
      prevValue: "",
      result: "0",
      operation: ""
    }
  }
  
  handleDisplay = (e) => {
    this.setState({ displayValue: Number(this.state.displayValue.concat(e.target.value)).toLocaleString() })
  }
  
  handleNegative = () =>{
    this.setState({ displayValue: this.state.displayValue * -1})
  }
  
  handleOperation = (e) => {
    this.setState( prevState => ({ prevValue: prevState.displayValue, displayValue: "", operation: e.target.value}))
  }

  handleResult = () => {
    if(this.state.operation === "+"){
      this.setState({displayValue: Number(this.state.prevValue) + Number(this.state.displayValue)})
    } else if(this.state.operation === "-"){
      this.setState({displayValue: Number(this.state.prevValue) - Number(this.state.displayValue)})
    } else if(this.state.operation === "*"){
      this.setState({displayValue: Number(this.state.prevValue) * Number(this.state.displayValue)})
    } else if(this.state.operation === "/"){
      this.setState({displayValue: Number(this.state.prevValue) / Math.round(this.state.displayValue)})
    }
  }

  handleReset = () => {
    this.setState({ displayValue: "0", prevValue: "", result: "0" })
  }

  render() {
    return (
      <section>
        <h1>Simple Calculator</h1>
        <div className="calc">
          <Screen displayValue={this.state.displayValue} />
          <Buttons handleDisplay={this.handleDisplay} handleNegative={this.handleNegative} handleReset={this.handleReset} handleOperation={this.handleOperation} handleResult={this.handleResult}/>
        </div>
      </section>
    )
  }
}

export default App
