import React, { Component } from 'react'
import {evaluate} from "mathjs";

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
    render() {
        return (
            <div className = "buttonDiv">
                <input type="text" value={this.state.input}></input>
                <br/>
                <button onClick={this.clearChange} value= {""}>ac</button>
                <button onClick={this.inputChange} value= {`${*-1}`}>+/-</button>
                <button onClick={this.inputChange} value= {"."}>.</button>
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
                <button onClick={this.inputChange} value= {"+"}>+</button>
                <button onClick={this.inputChange} value= {"-"}>-</button>
                <button onClick={this.inputChange} value= {"*"}>x</button>
                <button onClick={this.inputChange} value= {"/"}>÷</button>
                <button onClick={this.equalChange} value= {"="}>=</button>
            </div>
        )
    }
}
