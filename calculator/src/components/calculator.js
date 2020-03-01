import React, { Component } from 'react'
import * as math from "mathjs";
export default class Calculator extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          input: ""
        };
      }

    render() {
        return (
            <div className = "buttonDiv">
                <button>ac</button>
                <button>+/-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>.</button>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>÷</button>
                <button>=</button>
                <input type="text" placeholder="value"></input>
            </div>
        )
    }
}
