import React, {Component} from "react";
import "./Calculator.css"
import Button from "./Button.js"

class Calculator extends Component {
  render () {
    return (
      <div className="wrapper">
        <div className="row">
          <Button>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>X</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row">
          <Button>0</Button>
          <Button> </Button>
          <Button>.</Button>
          <Button>=</Button>
        </div>
      </div>
    )
  }
}

export default Calculator