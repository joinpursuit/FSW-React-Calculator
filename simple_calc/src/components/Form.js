import React from "react"
import Display from "./display"
import operation from "./operations"

class Form extends React.Component {
  state = {
   numValue: "",
   operation: "",
   prevValue: ""

  };

  handleNumber = (e)=>{
    e.preventDefault();
    let btnval = this.state.numValue;
    btnval += e.target.value
    this.setState({numValue:btnval})
    console.log(this.state.numValue)
   
  }

  handleOperation = (e)=>{
    e.preventDefault();
    let val = this.state.numValue;
    let operation = e.target.value
    this.setState({numValue:"",prevValue:val, operation:operation})
    debugger
  }

  passingOperationg = (num1,num2,op) => {  
    debugger
  operation(num1,num2,op)
  
  }


  render(){
    let {numValue, operation, prevValue} = this.state
    return (
        <div>
       
        <Display numValue = {numValue} prevValue = {prevValue}/>
        <form onClick ={this.handleNumber}>
            <button value = {0}>0</button>
            <button value = {1}>1</button>
            <button value = {2}>2</button>
            <button value = {3}>3</button>
            <br/>
            <button value = {4}>4</button>
            <button value = {5}>5</button>
            <button value = {6}>6</button>
            <button value = {7}>7</button>
            <br/>
            <button value = {8}>8</button>
            <button value = {9}>9</button>
          <br/>
          </form>

          <form onClick={this.handleOperation}>
            <button value = "+">+</button>
            <button value = "-">-</button>
            <button value = "*">*</button>
            <button value = "/">/</button>
          </form>

          <button value = "=" onClick={() => this.passingOperationg(prevValue,numValue,operation)} >=</button>
          <br/>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
        
        </div>
      );
      
  }
}

export default Form;
