import React, { Component } from 'react'
import * as math from "mathjs";
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

    render() {
        return (
            <div className = "buttonDiv">
                <input type="text" value={this.state.input}></input>
                <br/>
                <button>ac</button>
                <button>+/-</button>
                <button>.</button>
                <br/>
                <button onClick={this.inputChange} value= {"1"}>1</button>
                <button>2</button>
                <button>3</button>
                <br/>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <br/>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <br/>
                <button>0</button>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>÷</button>
                <button>=</button>
            </div>
        )
    }
}
