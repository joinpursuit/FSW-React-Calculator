import React, { Component } from "react";
import "./App.css";
import Keypad from "./Keypad/Keypad";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      results: 0,
    };
  }

  onClick = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "AC") {
      this.setState({ results: 0 });
    } 
    
    if (value === "%"){
      
    }
    
    else{
       this.setState({
      results: value,
    });
    }
   
  };


  render() {
    const { results } = this.state;
    console.log(results);
    return (
      <div className="App">
        <div className="Calculator">
          <section className="Results">{results}</section>
          <section className="Keypad">
            <button value="AC" onClick={this.onClick}>
              AC
            </button>
            <button value="+/-" onClick={this.onClick}>
              +/-
            </button>
            <button value="%" onClick={this.onClick}>
              %
            </button>
            <button value="+" onClick={this.onClick}>
              ÷
            </button>
            <button value="7" onClick={this.onClick}>
              7
            </button>
            <button value="8" onClick={this.onClick}>
              8
            </button>
            <button value="9" onClick={this.onClick}>
              9
            </button>
            <button value="x" onClick={this.onClick}>
              x
            </button>
            <button value="4" onClick={this.onClick}>
              4
            </button>
            <button value="5" onClick={this.onClick}>
              5
            </button>
            <button value="6" onClick={this.onClick}>
              6
            </button>
            <button value="-" onClick={this.onClick}>
              -
            </button>
            <button value="1" onClick={this.onClick}>
              1
            </button>
            <button value="2" onClick={this.onClick}>
              2
            </button>
            <button value="3" onClick={this.onClick}>
              3
            </button>
            <button value="+" onClick={this.onClick}>
              +
            </button>
          </section>
          <section className="KeypadLR">
            <button value="0" onClick={this.onClick}>
              0
            </button>
            <button className="btn" onClick={this.onClick}>
              .
            </button>
            <button value="=" onClick={this.onClick}>
              =
            </button>
          </section>
        </div>
      </div>
    );
  }
}
