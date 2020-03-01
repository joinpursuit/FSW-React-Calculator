import React, { Component } from 'react'
import {evaluate} from "mathjs";
import NumberFormat from 'react-number-format'
import '../css/calculator.css'

export default class Calculator extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          input: ""
        };
      }

    inputChange = (e) => {
        this.setState({input: this.state.input + e.target.value});
        debugger
      };
    clearChange = (e) => {
        this.setState({input: e.target.value});
        debugger
      };
      equalChange = (e) => {
        this.setState({input: evaluate(this.state.input)});
        debugger
      };
      sunMoonChange = (e) => {
        this.setState({input: evaluate(this.state.input * -1)});
        debugger
      };
      percentChange = (e) => {
        this.setState({input: evaluate(this.state.input * 0.01)});
        debugger
      };
      inverseChange = (e) => {
        this.setState({input: evaluate(1 / this.state.input)});
        debugger
      };
    render() {
        return (

<div class="grid-container">
  <div class="input">
  <NumberFormat type="text" thousandSeparator={true} value={this.state.input}></NumberFormat>
  </div>
  <div class="buttons">
                <button id="red" onClick={this.clearChange} value= {""}>ac</button>
                <button onClick={this.sunMoonChange} value= {"*"-1}>+/-</button>
                <button onClick={this.inputChange} value= {"."}>.</button>
                <button onClick={this.percentChange} value= {"%"}>%</button>
                {/* <br/> */}
                <button onClick={this.inputChange} value= {1}>1</button>
                <button onClick={this.inputChange} value= {2}>2</button>
                <button onClick={this.inputChange} value= {3}>3</button>
                {/* <br/> */}
                <button onClick={this.inputChange} value= {4}>4</button>
                <button onClick={this.inputChange} value= {5}>5</button>
                <button onClick={this.inputChange} value= {6}>6</button>
                {/* <br/> */}
                <button onClick={this.inputChange} value= {7}>7</button>
                <button onClick={this.inputChange} value= {8}>8</button>
                <button onClick={this.inputChange} value= {9}>9</button>
                {/* <br/> */}
                <button onClick={this.inputChange} value= {0}>0</button>
                <button onClick={this.inputChange} value= {3.14}>π</button>
                <button onClick={this.inverseChange} value= {"Inv"}>Inv</button>
                <button onClick={this.inputChange} value= {"+"}>+</button>
                <button onClick={this.inputChange} value= {"-"}>-</button>
                <button onClick={this.inputChange} value= {"*"}>x</button>
                <button onClick={this.inputChange} value= {"/"}>÷</button>
  </div>
  <div class="enter">
  <button onClick={this.equalChange} value= {"="}>=</button>
  </div>
</div>

            /* <div className = "buttonDiv">
                <NumberFormat type="text" thousandSeparator={true} value={this.state.input}></NumberFormat>
                <br/>
                <button onClick={this.clearChange} value= {""}>ac</button>
                <button onClick={this.sunMoonChange} value= {"*"-1}>+/-</button>
                <button onClick={this.inputChange} value= {"."}>.</button>
                <button onClick={this.percentChange} value= {"%"}>%</button>
                <br/>
                <button onClick={this.inputChange} value= {1}>1</button>
                <button onClick={this.inputChange} value= {2}>2</button>
                <button onClick={this.inputChange} value= {3}>3</button>
                <br/>
                <button onClick={this.inputChange} value= {4}>4</button>
                <button onClick={this.inputChange} value= {5}>5</button>
                <button onClick={this.inputChange} value= {6}>6</button>
                <br/>
                <button onClick={this.inputChange} value= {7}>7</button>
                <button onClick={this.inputChange} value= {8}>8</button>
                <button onClick={this.inputChange} value= {9}>9</button>
                <br/>
                <button onClick={this.inputChange} value= {0}>0</button>
                <button onClick={this.inputChange} value= {3.14}>π</button>
                <button onClick={this.inverseChange} value= {"Inv"}>Inv</button>
                <button onClick={this.inputChange} value= {"+"}>+</button>
                <button onClick={this.inputChange} value= {"-"}>-</button>
                <button onClick={this.inputChange} value= {"*"}>x</button>
                <button onClick={this.inputChange} value= {"/"}>÷</button>
                <button onClick={this.equalChange} value= {"="}>=</button>
            </div> */
            
        )
    }
}
