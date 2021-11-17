import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      preDisplay: 0,
      afterDisplay: [],

    }
  }

  handleInput =(e)=>{
    this.setState ({
      afterDisplay: [...this.state.afterDisplay, e.target.value],
    })
  }

  clearButton =()=>{
    this.setState ({
      afterDisplay: [],
    })
  }
  render(){
    const {preDisplay, afterDisplay} = this.state;
    return (
      <div>
        <div id="display">{afterDisplay.length===0 ? preDisplay : afterDisplay} </div>
        <div id="all-buttons">
          <div id="num-buttons">
            <button value="7" onClick={this.handleInput}>7</button>
            <button value="8" onClick={this.handleInput}>8</button>
            <button value="9" onClick={this.handleInput}>9</button>
            
            <button value="4" onClick={this.handleInput}>4</button>
            <button value="5" onClick={this.handleInput}>5</button>
            <button value="6" onClick={this.handleInput}>6</button>

            <button value="1" onClick={this.handleInput}>1</button>
            <button value="2" onClick={this.handleInput}>2</button>
            <button value="3" onClick={this.handleInput}>3</button>

            <button value="0" onClick={this.handleInput}>0</button>
            <button value="." onClick={this.handleInput}>.</button>
          </div>
          <div id="function-buttons">
            <button value="AC" onClick={this.clearButton}>AC</button>
            <button value="+/-">/-</button>
            <button value="%">%</button>
            <button value="÷">÷</button>
            <button value="x">x</button>
            <button value="-">-</button>
            <button value="+">+</button>
            <button value="=">=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;