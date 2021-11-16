import { Component } from 'react';
import './App.css';
import data from './data/buttonData';


class App extends Component {

  constructor(){
    super()
    this.state = {
      digits: data.numbers,
      num1: "",
      num2: "",
      operation: "",
      result: 0,
      numDisplay: "0",
      isActive: false
    }
  }

  handleDisplay=(num)=>{  
    console.log(num)
    if(!this.state.isActive){
      this.setState({
        numDisplay: this.state.numDisplay + num.digit,
        num1: this.state.numDisplay + num.digit
      })
    }else{
      this.setState({
        numDisplay: this.state.numDisplay + num.digit,
        num2: this.state.numDisplay + num.digit
      })
    }
     
  }

  handleOperation=(e)=>{
    this.setState({
      operation:e.target.value,
      isActive: true,
      numDisplay:""
    })
  }

  handleReset=()=>{
    this.setState({
      num1: "",
      num2: "",
      operation: "",
      result: 0,
      numDisplay: ""
    })
  }

  handleCalc=()=>{
    let { num1, num2} = this.state
    let sum = 0;
    switch (this.state.operation ){
      case "plus":
        sum = Number(num1) + Number(num2)
        break;
      case "minus":
        sum = Number(num1) - Number(num2)
        break;
      case "multiply":
        sum = Number(num1) * Number(num2)
        break;
        case "divide":
        sum = Number(num1) / Number(num2)
        break;
      default:
        break;
    }
    this.setState({
      result:sum,
      numDisplay: sum,
      isActive: false
    })
  }

  handlePosNeg=()=>{
    if(!this.state.isActive){
     this.setState({
       num1: Math.abs(this.state.num1) * -1,
       numDisplay: Math.abs(this.state.num1) * -1
     })
    }else if(this.state.isActive){
      this.setState({
        num2: Math.abs(this.state.num2) * -1,
        numDisplay: Math.abs(this.state.num1) * -1
       })
    }

  }

  
  render(){
    console.log(this.state.num1, this.state.num2, this.state.operation)
    console.log(this.state.isActive)
    
    let numArr = this.state.digits.map((num)=>{
      return <button className="button" id={num.value} value={num.value} onClick={()=>this.handleDisplay(num)}>{num.digit}</button>
    })
    
    
    return (
      <div className= "calc-container">
        <div className="display">{Number(this.state.numDisplay).toLocaleString()}</div>
        <div className="button-container">
        {numArr}
        <button className="button" id="equal" value="equal" onClick={this.handleCalc}>=</button>
        <button className="button" id="clear" value="clear" onClick={this.handleReset}>AC</button>
        <button className="button" id="multiply" value="multiply" onClick={this.handleOperation}>x</button>
        <button className="button" id="plus" value="plus" onClick={this.handleOperation}>+</button>
        <button className="button" id="minus" value="minus" onClick={this.handleOperation}>-</button>
        <button className="button" id="divide" value="divide" onClick={this.handleOperation}>÷</button>
        <button className="button" id="pos-neg" value="pos-neg" onClick={this.handlePosNeg}>+/-</button>
        </div>
      </div>
    );
  }
}


export default App;
