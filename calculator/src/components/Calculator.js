import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"
import Display from "./Display.js"
import * as math from "mathjs"



class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForOperand: false
      
    }
  }

  handleNumber = (num) => {
    let {displayValue, waitingForOperand} = this.state
    if (waitingForOperand) {
      this.setState({displayValue: String(num), waitingForOperand: false })
    } else if (num === "00" && displayValue === "0") {
      this.setState({displayValue: "0"})
    }  else {
      this.setState({displayValue: displayValue === "0" ? num : displayValue + num})
    }
  }

  handleOperator = (operator) => {
    let {displayValue, previousValue, operation} = this.state
    if(operator === "x"){
      operator = "*"
    } else if (operator === "÷"){
      operator = "/"
    }

    if(isNaN(parseFloat(previousValue))){
      this.setState({previousValue: displayValue})
    } else if (operation){
      let currentValue = previousValue || 0
      let newValue = String(math.evaluate(`${currentValue} ${operation} ${displayValue}`))
      this.setState({displayValue: newValue, previousValue: newValue})
    }
    this.setState({waitingForOperand: true, operation:operator})
  }

  handleEqual = () => {
    let {displayValue, previousValue, operation} = this.state
    if(previousValue && operation){
      let newValue = String(math.evaluate(`${previousValue} ${operation} ${displayValue}`))
      this.setState({displayValue: newValue, previousValue: null, operation: null})
    } else if (operation){
      let newValue = String(math.evaluate(`${displayValue} ${operation} ${displayValue}`))
      this.setState({displayValue: newValue, operation: null})
    }
  }

  handleDecimel = () => {
    let {displayValue} = this.state
    if (displayValue.indexOf(".") === -1) {
      this.setState({displayValue: displayValue + "."})
    }
  }

  handleInverter = () => {
    let {displayValue} = this.state
    this.setState({displayValue: displayValue.charAt(0) === "-" ? displayValue.substring(1) : "-" + displayValue})
  }

  handlePercentage = () => {
    let {displayValue} = this.state
    let percentage = parseFloat(displayValue) / 100
    this.setState({displayValue: String(percentage)})
  }

  handleClearAll = () => {
    this.setState({ displayValue: "0",
    previousValue: null,
    operation: null,
    waitingForOperand: false})
  }

  handleClearDisplay = () => {
    this.setState({displayValue: ""})
  }

  render () {
    console.log(this.state)
    let {displayValue} = this.state
    let clearDisplay = displayValue !== '0' && displayValue !== ""
    let clearButton = clearDisplay ? 'C' : 'AC'
    return (
      <div className="wrapper">
        <div>
          <Display displayValue={displayValue}/>
        </div>
        <div className="row">
          <Button handleClick={clearDisplay ? this.handleClearDisplay: this.handleClearAll}>{clearButton}</Button>
          <Button handleClick={this.handleInverter}>+/-</Button>
          <Button handleClick={this.handlePercentage}>%</Button>
          <Button handleClick={this.handleOperator}>÷</Button>
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber}>7</Button>
          <Button handleClick={this.handleNumber}>8</Button>
          <Button handleClick={this.handleNumber}>9</Button>
          <Button handleClick={this.handleOperator}>x</Button>
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber}>4</Button>
          <Button handleClick={this.handleNumber}>5</Button>
          <Button handleClick={this.handleNumber}>6</Button>
          <Button handleClick={this.handleOperator}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber}>1</Button>
          <Button handleClick={this.handleNumber}>2</Button>
          <Button handleClick={this.handleNumber}>3</Button>
          <Button handleClick={this.handleOperator}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.handleNumber}>0</Button>
          <Button handleClick={this.handleNumber}>00</Button>
          <Button handleClick={this.handleDecimel}>.</Button>
          <Button handleClick={this.handleEqual}>=</Button>
        </div>
      </div>
    )
  }
}

export default Calculator