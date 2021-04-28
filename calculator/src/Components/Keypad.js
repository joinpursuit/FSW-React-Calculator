import React from "react";

import "./Keypad.css";
class Keypad extends React.Component {

  addNum = (e) => {
    this.props.btnPressed(e.target.name)
  };

  clear = (e) => {
      this.props.clear(e.target.name)
  }
  render() {
    return (
        <section className="button">
          <button onClick={this.addNum} name="1">
            1
          </button>
          <button onClick={this.addNum} name="2">
            2
          </button>
          <button onClick={this.addNum} name="3">
            3
          </button>

          <button onClick={this.addNum} name="4">
            4
          </button>
          <button onClick={this.addNum} name="5">
            5
          </button>
          <button onClick={this.addNum} name="6">
            6
          </button>
          <button  onClick={this.addNum} name="7">
            7
          </button>
          <button onClick={this.addNum} name="8">
            8
          </button>
          <button onClick={this.addNum} name="9">
            9
          </button>
          <button onClick={this.addNum} name="0">
            0
          </button>

          <button onClick={this.clear}>C</button>

          <button onClick={this.addNum}name=".">
            .
          </button>
          <button onClick={this.addNum} name="+/-">
            +/-
          </button>

          <button onClick={this.addNum} name="+">
            +
          </button>
          <button onClick={this.addNum} name="-">
            -
          </button>
          <button onClick={this.addNum} name="*">
            x
          </button>
          <button onClick={this.addNum} name="/">
            ➗
          </button>
          <button onClick={this.addNum} name="=">
            =
          </button>
        </section>
    );
  }
}

export default Keypad;
