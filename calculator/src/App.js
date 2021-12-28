import './App.css';
import  React from 'react';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      userInput: false,
      result:0,
      display: "", 
      operator:"",
      previousValue:0,
    }
  }

  handleInput =(e)=>{
    this.setState({
      display: this.state.display + e.target.value,
      userInput: true,
    })
  }

  handleClearButton =()=>{
    this.setState({
      display: "", 
      operator:"",
      previousValue:0,
      result: 0,
      userInput: false,
    })
  }

  handleResult =()=>{
    switch(this.state.operator){
      case "+":
        this.setState({
          result: this.state.previousValue + Number(this.state.display),
          userInput: false, 
        }) 
        break;
      case "-":
        this.setState({
          result: this.state.previousValue - Number(this.state.display),
          userInput: false,
        }) 
        break;
      case "*":
          this.setState({
            result: this.state.previousValue * Number(this.state.display),
            userInput: false,
          }) 
          break;
      case "/":
        this.setState({
          result: this.state.previousValue/ Number(this.state.display),
          userInput: false,
        }) 
        break;
    }
  }

handleOperator=(e)=>{
  if(this.state.display && this.state.previousValue) this.handleResult();
  this.setState({
    previousValue:this.state.result || Number(this.state.display),
    display:"",
    operator:e.target.value,
    userInput: true,
  })
}

  render(){
    return (
      <div className="calc">
        <div className="display">
          <p>{this.state.userInput? this.state.display: this.state.result}</p>
        </div>
          <div className="buttons">
            <button className="btn ac bg-grey" value="AC"onClick={this.handleClearButton}>ac</button>   

            <button className="btn seven bg-black" value="7" onClick={this.handleInput}>7</button>
            <button className="btn eight bg-black" value="8" onClick={this.handleInput}>8</button>
            <button className="btn nine bg-black" value="9" onClick={this.handleInput}>9 </button>
            <button className="btn division bg-orange" value="/" onClick={this.handleOperator}>/</button>


            <button className="btn four bg-black" value="4" onClick={this.handleInput}>4</button>
            <button className="btn five bg-black" value="5" onClick={this.handleInput}>5</button>
            <button className="btn six bg-black" value="6" onClick={this.handleInput}>6</button>
            <button className="btn minus bg-orange" value="-" onClick={this.handleOperator}>-</button>

            <button className="btn one bg-black" value="1" onClick={this.handleInput}>1</button>
            <button className="btn two bg-black" value="2" onClick={this.handleInput}>2</button>
            <button className="btn three bg-black" value="3" onClick={this.handleInput}>3</button>
            <button className="btn plus bg-orange" value="+" onClick={this.handleOperator}>+</button>

            <button className="btn zero bg-black" value="0" onClick={this.handleInput}>0</button>
            <button className="btn dot bg-black" value="." onClick={this.handleInput}>.</button>
            <button className="btn equal bg-black" value="=" onClick={this.handleResult}>=</button>
            <button className="btn miltiply bg-orange" value="*" onClick={this.handleOperator}>*</button>
          </div>
      </div>
    );
  }
}

export default App;
