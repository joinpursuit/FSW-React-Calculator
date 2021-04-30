import React from "react";

class Calculator extends React.Component {

state = { displayValue: [] }; 

handleClick(digit) {
this.setState((prevState)=> ({
    displayValue: [...prevState.displayValue, digit]
}))
}

  render() {
    return (
      <section>
        <p id="display">0</p>
        <button onClick={this.handleClick}>1</button>
        <button onClick={this.handleClick}>2</button>
        <button onClick={this.handleClick}>3</button>
        <button onClick={this.handleClick}>4</button>
        <button onClick={this.handleClick}>5</button>
        <button onClick={this.handleClick}>6</button>
        <button onClick={this.handleClick}>7</button>
        <button onClick={this.handleClick}>8</button>
        <button onClick={this.handleClick}>9</button>
        <button onClick={this.handleClick}>0</button>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClick}>-</button>
        <button onClick={this.handleClick}>÷</button>
        <button onClick={this.handleClick}>=</button>
        <button onClick={this.handleClick}>x</button>
        <button onClick={this.handleClick}>%</button>
        <button onClick={this.handleClick}>.</button>
        <button onClick={this.handleClick}>AC</button>
        <button onClick={this.handleClick}>+/-</button>
      </section>
    );
  }
}

export default Calculator;
