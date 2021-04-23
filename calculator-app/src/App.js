import React, { Component } from "react"
import Screen from "./Components/Screen"
import Buttons from "./Components/Buttons"
import "./App.css"

export class App extends Component {
  constructor(){
    super()

    this.state = {
      value: ""
    }
  }
  
  displayValue = (e) => {
    this.setState({value: this.state.value.concat(e.target.value)})
  }


  evaluate = () => {

  }

  render() {
    return (
      <div>
        <Screen value={this.state.value} />
        <Buttons displayValue={this.displayValue} />
      </div>
    )
  }
}

export default App
