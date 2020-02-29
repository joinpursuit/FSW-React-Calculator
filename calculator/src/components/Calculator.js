import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"
import Display from "./Display.js"
import * as math from "mathjs"


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "0"
    }
  }
  updateDisplay = (value) => {
    let {display} = this.state
    if(value === "X"){
      value = "*"
    }
    this.setState({display: display === "0" ? value : display + value})
  }

  handleEqual = () => {
    let {display} = this.state
    this.setState({display: math.evaluate(display)})
  }

  handleDecimel = () => {
    let {display} = this.state
    if (display.indexOf(".") === -1) {
      this.setState({display: display + "."})
    }
  }

  handleInverter = () => {
    let {display} = this.state
    this.setState({display: display.charAt(0) === "-" ? display.substring(1) : "-" + display})
  }

  handleClear = () => {
    this.setState({display: "0"})
  }

  render () {
    let {display} = this.state
    return (
      <div className="wrapper">
        <div>
          <Display display={display}/>
        </div>
        <div className="row">
          <Button handleClick={this.handleClear}>AC</Button>
          <Button handleClick={this.handleInverter}>+/-</Button>
          <Button handleClick={this.updateDisplay}>%</Button>
          <Button handleClick={this.updateDisplay}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>7</Button>
          <Button handleClick={this.updateDisplay}>8</Button>
          <Button handleClick={this.updateDisplay}>9</Button>
          <Button handleClick={this.updateDisplay}>X</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>4</Button>
          <Button handleClick={this.updateDisplay}>5</Button>
          <Button handleClick={this.updateDisplay}>6</Button>
          <Button handleClick={this.updateDisplay}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>1</Button>
          <Button handleClick={this.updateDisplay}>2</Button>
          <Button handleClick={this.updateDisplay}>3</Button>
          <Button handleClick={this.updateDisplay}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.updateDisplay}>0</Button>
          <Button handleClick={this.updateDisplay}> </Button>
          <Button handleClick={this.handleDecimel}>.</Button>
          <Button handleClick={this.handleEqual}>=</Button>
        </div>
      </div>
    )
  }
}

export default Calculator