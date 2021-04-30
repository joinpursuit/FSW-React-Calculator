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
      operation: ""
    }
  }
  
  handleDisplay = (e) => {
    this.setState({ displayValue: Number(this.state.displayValue.concat(e.target.value)).toLocaleString() }) //Nan is returned when another number is added to end of 1,000
  }
  
  handleNegative = () =>{
    this.setState({ displayValue: (this.state.displayValue * -1).toLocaleString()}) //Nan is returned when 1000 is converted to negative
  }
  
  handleOperation = (e) => {
    this.setState( prevState => ({ prevValue: prevState.displayValue, displayValue: "", operation: e.target.value}))
  }

  handleResult = () => {
    if(this.state.operation === "+"){
      this.setState({ displayValue: ((Number(this.state.prevValue) + Number(this.state.displayValue))).toLocaleString() })
    } else if(this.state.operation === "-"){
      this.setState({ displayValue: (this.state.prevValue - this.state.displayValue).toLocaleString() }) //Nan is returned is 1,111-100
    } else if(this.state.operation === "*"){
      this.setState({ displayValue: (this.state.prevValue * this.state.displayValue).toLocaleString() })
    } else if(this.state.operation === "/"){
      this.setState({ displayValue: Math.round(this.state.prevValue / this.state.displayValue).toLocaleString() }) //Nan is returned is 1,111 / 1
    }
  }

  handleReset = () => {
    this.setState({ displayValue: "0", prevValue: "", operation: "" })
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
