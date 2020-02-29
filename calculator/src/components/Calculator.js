import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"
import ClearButton from "./ClearButton.js"
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
    const {display} = this.state
    if(value === "X"){
      value = "*"
    }
    this.setState({display: display === "0" ? value : display + value})
  }

  handleEqual = () => {
    const {display} = this.state
    this.setState({display: math.evaluate(display)})
  }

  handleDecimel = () => {
    const {display} = this.state
    if (display.indexOf(".") === -1) {
      this.setState({display: display + "."})
    }
  }

  render () {
    let {display} = this.state
    return (
      <div className="wrapper">
        <div>
          <Display display={display}/>
        </div>
        <div className="row">
          <ClearButton handleClear={() => this.setState({display:"0"})}>AC</ClearButton>
          <Button handleClick={this.updateDisplay}>+/-</Button>
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