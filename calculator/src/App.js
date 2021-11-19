import './App.css';
import  React from 'react';



class App extends React.Component{
  constructor(){
    super();

    this.state={
      display: "", 
      operator:"",
      previousValue:0,
    }
  }

  handleInput =(e)=>{
    this.setState({
      display: this.state.display + e.target.value
    })
  }

  handleClearButton =()=>{
    this.setState({
      display: "", 
      operator:"",
      previousValue:0,
    })
  }

  handleResult =()=>{
    switch(this.state.operator){
      case "+":
        this.setState({
          display: this.state.previousValue + Number(this.state.display),
        }) 
        break;
      case "-":
        this.setState({
          display: this.state.previousValue - Number(this.state.display),
        }) 
        break;
      case "*":
          this.setState({
            display: this.state.previousValue * Number(this.state.display),
          }) 
          break;
      case "/":
        this.setState({
          display: this.state.previousValue/ Number(this.state.display),
        }) 
        break;
    }
  }

handleOperator=(e)=>{
  this.setState({
    previousValue:Number(this.state.display),
    display:"",
    operator:e.target.value
  })
}

  render(){
    return (
      <div id="calculator">
        <div id="display">{this.state.display}</div>
            <button id="one" value="1" onClick={this.handleInput}>1</button>
            <button value="2" onClick={this.handleInput}>2</button>
            <button value="3" onClick={this.handleInput}>3</button>

            <button value="4" onClick={this.handleInput}>4</button>
            <button value="5" onClick={this.handleInput}>5</button>
            <button value="6" onClick={this.handleInput}>6</button>
            
            <button value="7" onClick={this.handleInput}>7</button>
            <button value="8" onClick={this.handleInput}>8</button>
            <button value="9" onClick={this.handleInput}>9 </button>

            <button value="0" onClick={this.handleInput}>0</button>

            <button id="plus" value="+" onClick={this.handleOperator}>+</button>
            <button value="-" onClick={this.handleOperator}>-</button>
            <button value="*" onClick={this.handleOperator}>*</button>
            <button value="/" onClick={this.handleOperator}>/</button>
            <button id="dot" value="." onClick={this.handleInput}>.</button>
            <button id="all-clear"value="AC"onClick={this.handleClearButton}>AC</button>
            <button id="equal" value="=" onClick={this.handleResult}>=</button>
      </div>
    );
  }
}

export default App;
