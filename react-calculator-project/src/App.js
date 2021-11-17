import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: "",
      previousValue: "",
      operation: "",
      allClear: "AC"
    }
  }

  handleNumberPress = (num) => {
    this.setState({
      displayValue: this.state.displayValue + num,
      allClear: "C"
    })
  }

  handleOperation = (op) => {
    this.setState({
      operation: op
    })
  }

  handlePositiveNegativeButton = () => {
    this.setState({
      displayValue: this.state.displayValue * -1
    })
  }

  handlePercentButton = () => {
    this.setState({
      displayValue: this.state.displayValue/100
    })
  }

  handleAllClear = () => {
    this.setState({
      displayValue: "",
      previousValue: "",
      operation: "",
      allClear: "AC"
    })
  }

  render(){
    

    return (
      <div className="App">
        <div id="display">{this.state.displayValue || 0}</div>
        <div id="buttons-container">
          <button id="all-clear-btn" onClick={this.handleAllClear}>{this.state.allClear}</button>
          <button id="pos-neg-btn" onClick={this.handlePositiveNegativeButton}>+/-</button>
          <button id="percent-btn" onClick={this.handlePercentButton}>%</button>
          <button className="operator-btn" onClick={()=>this.handleOperation('÷')}>÷</button>
          <button onClick={()=>this.handleNumberPress('7')}>7</button>
          <button onClick={()=>this.handleNumberPress('8')}>8</button>
          <button onClick={()=>this.handleNumberPress('9')}>9</button>
          <button className="operator-btn" onClick={()=>this.handleOperation('x')}>x</button>
          <button onClick={()=>this.handleNumberPress('4')}>4</button>
          <button onClick={()=>this.handleNumberPress('5')}>5</button>
          <button onClick={()=>this.handleNumberPress('6')}>6</button>
          <button className="operator-btn" onClick={()=>this.handleOperation('-')}>-</button>
          <button onClick={()=>this.handleNumberPress('1')}>1</button>
          <button onClick={()=>this.handleNumberPress('2')}>2</button>
          <button onClick={()=>this.handleNumberPress('3')}>3</button>
          <button className="operator-btn" onClick={()=>this.handleOperation('+')}>+</button>
          <button id="zero-btn" onClick={()=>this.handleNumberPress(0)}>0</button>
          <button onClick={()=>this.handleNumberPress('.')}>.</button>
          <button id="equal-btn">=</button>
        </div>
      </div>
    );
  }
}

export default App;
