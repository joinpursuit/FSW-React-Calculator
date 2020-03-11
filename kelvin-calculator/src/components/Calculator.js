import React, { Component, useEffect, useState } from 'react'
import {evaluate} from "mathjs";
import NumberFormat from 'react-number-format'
import '../components/Calculator.css'

export default class Calculator extends Component {


    
        state = {
          input: ""
        };
      

    inputChange = (e) => {
        this.setState({input: this.state.input + e.target.value});
      };
    clearChange = (e) => {
        this.setState({input: e.target.value});
      };
      equalChange = (e) => {
        this.setState({input: evaluate(this.state.input)});
      };
      sunMoonChange = (e) => {
        this.setState({input: evaluate(this.state.input * -1)});
      };
      percentChange = (e) => {
        this.setState({input: evaluate(this.state.input * 0.01)});
      };
      inverseChange = (e) => {
        this.setState({input: evaluate(1 / this.state.input)});
      };
    render() {
        return (

<div class="grid-container">
  <div class="input">
  <NumberFormat type="text" className="input" thousandSeparator={true} value={this.state.input}></NumberFormat>
  </div>
  <div className="buttons">
                <button className="pink" onClick={this.clearChange} value= {""}>ac</button>
                <button className="grey" onClick={this.sunMoonChange} value= {"*"-1}>+/-</button>
                <button className="grey" onClick={this.inputChange} value= {"."}>.</button>
                <button className="grey" onClick={this.percentChange} value= {"%"}>%</button>
                <button className="numbers" onClick={this.inputChange} value= {1}>1</button>
                <button className="numbers" onClick={this.inputChange} value= {2}>2</button>
                <button className="numbers" onClick={this.inputChange} value= {3}>3</button>
                <button className="numbers" onClick={this.inputChange} value= {4}>4</button>
                <button className="numbers" onClick={this.inputChange} value= {5}>5</button>
                <button className="numbers" onClick={this.inputChange} value= {6}>6</button>
                <button className="numbers" onClick={this.inputChange} value= {7}>7</button>
                <button className="numbers" onClick={this.inputChange} value= {8}>8</button>
                <button className="numbers" onClick={this.inputChange} value= {9}>9</button>
                <button className="numbers" onClick={this.inputChange} value= {0}>0</button>
                <button className="grey" onClick={this.inputChange} value= {3.14}>π</button>
                <button className="grey" onClick={this.inverseChange} value= {"Inv"}>Inv</button>
                <button className="purple" onClick={this.inputChange} value= {"+"}>+</button>
                <button className="purple"  onClick={this.inputChange} value= {"-"}>-</button>
                <button className="purple" onClick={this.inputChange} value= {"*"}>x</button>
                <button className="purple" onClick={this.inputChange} value= {"/"}>÷</button>
  </div>
  <div class="enter">
  <button className="red" onClick={this.equalChange} value= {"="}>=</button>
  </div>
</div>          
        )
    
        }
    }