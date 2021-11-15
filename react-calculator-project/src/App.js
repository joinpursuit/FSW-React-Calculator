import { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';


class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '0',
      operation: '',
      currentNum: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let makeEquation = this.state.display + this.state.operation + this.state.display; // adding strings together
    
    this.setState({
      currentNum: makeEquation,
    });
  };

  handleNumberClick = (event) => {
    this.setState({
      display: `${this.state.display + event.target.textContent}`,
    });
  };

  handleOperationChange = (operand) => {
    this.setState({
      display:'0',
      currentNum: Number(this.state.display),
      operation: operand,
    })
  };

  evaluate = () => {
    const { display, currentNum, operation } = this.state;
    const currentNum = this[operation](Number(currentNum), Number(display));
    this.setState({
      display: currentNum,
    })  
  }

  handleIncrement = (num) => {
    this.setState({
      display: this.state.count + num,
    });
  };

  handleReset = () => {
    this.setState({
      display: '0',
      operation: '',
      result: 0,
    });
  };

  handlePercent = (event) => {
    console.log("Add code for handlePercent", event.target.value);
  };
  handleFlipSign = (event) => {
    console.log("Add code for handleFlipSign", event.target.value);
  };
  handleDecimal = (event) => {
    console.log("Add code for handleDecimal", event.target.value);
  };

  calculateEquals = () => {};

  render() {
    return (
      <div className="App">
        <Keypad
          handleSubmit={this.handleSubmit}
          handleNumberClick={this.handleNumberClick}
          handleOperationChange={this.handleOperationChange}
          evaulate={this.evaluate}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handlePercent={this.handlePercent}
          handleFlipSign={this.handleFlipSign}
          handleDecimal={this.handleDecimal}
          calculateEquals={this.calculateEquals}
        />
      </div>
    );
  }
}

export default App;
