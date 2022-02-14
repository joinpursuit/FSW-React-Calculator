import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      num1: "",
      num2: "",
      calcDisplay: "0",
      operation: "",
      result: 0,
      isActive: false,
    };
  }

  handleInput = (event) => {
    console.log(event.target.value);
    //!this.state.isActive is the same as this.state.isActive === false
    if (this.state.isActive === false) {
      this.setState({
        calcDisplay: this.state.calcDisplay + event.target.value,
        num1: this.state.calcDisplay + event.target.value,
      });
    } else {
      this.setState({
        calcDisplay: this.state.calcDisplay + event.target.value,
        num2: this.state.calcDisplay + event.target.value,
      });
    }
  };

  handleOperation = (event) =>{
    this.setState({
      operation: event.target.value,
      isActive: true,
      calcDisplay: ""
    })
  };

  handleCalc = () =>{
    let { num1, num2 } = this.state;
    let total = 0;

    switch(this.state.operation){
      case "add": 
        total = Number(num1) + Number(num2)
        break;
      case "minus":
        total = Number(num1) - Number(num2)
        break;
      case "divide":
        total = Number(num1) / Number(num2)
        break;
      case "multiply":
        total = Number(num1) * Number(num2)
        break;
      default: 
        break;
        
    }
    this.setState({
      result: total,
      calcDisplay: total,
      isActive: false
    })
  }

  handleReset = () => {
    this.setState ({
      num1: "",
      num2: "",
      calcDisplay: "0",
      operation: "",
      result: 0
    });
  };


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="numbers-display">{this.state.calcDisplay}</div>
          <div className="calc-element">
            <button>-/+</button>
            <button value="divide" onClick={this.handleOperation}>/</button>
            <button value="multiply" onClick={this.handleOperation}>*</button>
            <button onClick={this.handleCalc}>=</button>
            <button value="minus" onClick={this.handleOperation}>-</button>
            <button value="add" onClick={this.handleOperation}>+</button>
            <button onClick={this.handleReset}>AC</button>
            <button value="0" onClick={this.handleInput}>
              0
            </button>
            <button value="1" onClick={this.handleInput}>
              1
            </button>
            <button value="2" onClick={this.handleInput}>
              2
            </button>
            <button value="3" onClick={this.handleInput}>
              3
            </button>
            <button value="4" onClick={this.handleInput}>
              4
            </button>
            <button value="5" onClick={this.handleInput}>
              5
            </button>
            <button value="6" onClick={this.handleInput}>
              6
            </button>
            <button value="7" onClick={this.handleInput}>
              7
            </button>
            <button value="8" onClick={this.handleInput}>
              8
            </button>
            <button value="9" onClick={this.handleInput}>
              9
            </button>
            <button value="." onClick={this.handleInput}>
              .
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
