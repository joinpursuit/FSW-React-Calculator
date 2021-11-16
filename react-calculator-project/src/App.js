import { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';

class App extends Component {
  constructor() {
    super();

    this.state = {
      display: '0',
      currentNum: 0,
      operation: '',
    };
  }

  handleNumberClick = (event) => {
    // console.log("with commas: ", Number(this.state.display).toLocaleString())
    // console.log("num clicked: ", event.target.value)
    this.setState({
      display: `${Number(this.state.display.toLocaleString() + event.target.value)}`,
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
    
    if (operation === '' ){
      this.setState({
        display: `Error.`,
      })
    } else {
      const result = this[operation](Number(currentNum), Number(display));
      this.setState({
        display: result,
      })
    }
  }

  handleReset = () => {
    this.setState({
      display: '0',
      currentNum: 0,
      operation: '',
    });
  };

  handlePercent = () => {
    this.setState({
      display: `${Number(this.state.display) / 100}`,
      currentNum: Number(this.state.display) / 100,
      operation: '',
    })
  };

  handleFlipSign = () => {
    this.setState({
      display: `${Number(this.state.display) * -1}`,
    })
  };

  handleDecimal = () => {
    if (!this.state.display.includes('.')){  
        this.setState({
          display: this.state.display + '.'
        })
    }
  };

  handleComma = () => {
    if (this.state.display >= 3){
      this.setState({
        display: this.state.display + ','
      })
    }
  }

  multiply = (a, b) => a * b;

  divide = (a, b) => a / b;

  subtract = (a, b) => a - b;

  add = (a, b) => a + b;

  render() {
    return (
      <div className="App">
        <Keypad
          handleNumberClick={this.handleNumberClick}
          handleOperationChange={this.handleOperationChange}
          evaluate={this.evaluate}
          handleReset={this.handleReset}
          handlePercent={this.handlePercent}
          handleFlipSign={this.handleFlipSign}
          handleDecimal={this.handleDecimal}
          handleComma={this.handleComma}
          display={this.state.display}
        />
      </div>
    );
  }
}

export default App;
