import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      calcInput: ""
    };
  }


  handleIncrement = (num) => {
    this.setState({
      calcInput: this.state.calcInput + num,
    });
  };

  handleDecrement = (num) => {
    this.setState({
      calcInput: this.state.calcInput - num,
    });
  };

  handleMultiply = (num) => {
    this.setState({
      count: this.state.count * num,
    });
  };

  handleDivide = (num) => {
    this.setState({
      calcInput: this.state.calcInput / num,
    });
  };

  handleInput = (event) => {
    this.setState({
      calcInput: event.target.value,
    });
  };

  handleReset = () => {
    this.setState({
      calcInput: 0,
    });
  };

  render() {
  
    return (
      <div className="App">
        <div className="container">
          <form>
            <input
              type="number"
              placeholder="0"
              value={this.state.calcInput}
              onInput={this.handleInput}
            />
          </form>
          <div className="calc-element">
            <button>-/+</button>
            <button onClick={this.handleDivide}>/</button>
            <button onClick={this.handleMultiply}>*</button>
            <button>=</button>
            <button onClick={this.handleDecrement}>-</button>
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleReset}>AC</button>

            <button onClick={this.handleInput}>0</button>
            <button onClick={this.handleInput}>1</button>
            <button onClick={this.handleInput}>2</button>
            <button onClick={this.handleInput}>3</button>
            <button onClick={this.handleInput}>4</button>
            <button onClick={this.handleInput}>5</button>
            <button onClick={this.handleInput}>6</button>
            <button onClick={this.handleInput}>7</button>
            <button onClick={this.handleInput}>8</button>
            <button onClick={this.handleInput}>9</button>
            <button onClick={this.handleInput}>.</button>
            
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
