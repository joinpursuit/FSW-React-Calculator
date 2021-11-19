import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      display: "0",
      preInput: 0,
      operation: ""
    }
  }

  handleInput =(e)=>{
    this.setState ({
      display: this.state.display + e.target.value,
      
    })
  }

  clearButton =()=>{
    this.setState ({
      display: "0",
      operation: "",
      preInput: 0
    })
  }

  handleOperation = (e)=> {
        this.setState ({
          preInput: Number(this.state.display),
          display: "",
          operation: e.target.value
       })

  }

  handleFinalResult =(e)=>{
    switch(this.state.operation){
      case "+":
        this.setState({
          display: this.state.preInput + Number(this.state.display),
        }) 
        break;
      case "-":
        this.setState({
          display: this.state.preInput - Number(this.state.display),
        }) 
        break;
      case "*":
          this.setState({
            display: this.state.preInput * Number(this.state.display),
          }) 
          break;
      case "/":
        this.setState({
          display: this.state.preInput/ Number(this.state.display),
        }) 
        break;
    }
  }

  render(){
    const {display} = this.state;
    return (
      <div>
        <div id="display">{Number(display).toLocaleString()} </div>
        <div id="all-buttons">
          <div id="num-buttons">
            <button className="numbtn" value="7" onClick={this.handleInput}>7</button>
            <button className="numbtn"value="8" onClick={this.handleInput}>8</button>
            <button className="numbtn"value="9" onClick={this.handleInput}>9</button>
            
            <button className="numbtn"value="4" onClick={this.handleInput}>4</button>
            <button className="numbtn"value="5" onClick={this.handleInput}>5</button>
            <button className="numbtn"value="6" onClick={this.handleInput}>6</button>

            <button className="numbtn"value="1" onClick={this.handleInput}>1</button>
            <button className="numbtn"value="2" onClick={this.handleInput}>2</button>
            <button className="numbtn"value="3" onClick={this.handleInput}>3</button>

            <button className="numbtn" id="zero" value="0" onClick={this.handleInput}>0</button>
            <button className="numbtn"value="." onClick={this.handleInput}>.</button>
          </div>
          <div id="function-buttons">
            <button className="funtionBtn" value="AC" onClick={this.clearButton}>AC</button>
            <button className="funtionBtn" value="+/-" onClick={this.handleOperation}>/-</button>
            <button className="funtionBtn" value="%" onClick={this.handleOperation}>%</button>
            <button className="funtionBtn" value="÷" onClick={this.handleOperation}>÷</button>
            <button className="funtionBtn" value="*" onClick={this.handleOperation}>*</button>
            <button className="funtionBtn" value="-" onClick={this.handleOperation}>-</button>
            <button className="funtionBtn" value="+" onClick={this.handleOperation}>+</button>
            <button className="funtionBtn" value="=" onClick={this.handleFinalResult}>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;