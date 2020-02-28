import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"

class Calculator extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    )
  }
}

export default Calculator