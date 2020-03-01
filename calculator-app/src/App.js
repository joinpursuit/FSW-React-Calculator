import React from 'react';
import KeyPad from './components/KeyPad'
import './App.css';

class App extends React.Component {
  state = {
    displayValue: "0",
    previousValue: null,
    operation:"",
    waitingNewValue:false
  }

  handleNumberClear = (e) => {
    this.setState({displayValue: 0, previousValue: null, operation:"", waitingNewValue:false})
  }

  handleNumberClick = (e) => {
      if(this.state.displayValue){
      this.setState({ displayValue: this.state.displayValue + e.target.value, waitingNewValue:false})
      } else {
      this.setState({ displayValue : e.target.value})
    }
  }

  handleOperation = (e) =>{
    this.setState({
      displayValue: '',
      previousValue: this.state.displayValue, 
      operation: e.target.value,  
      waitingNewValue:true})
  }

  handleDecimal=(e) =>{
    if (!this.state.displayValue.includes(".")) {
      if(this.state.displayValue === "0"){
        let target = e.target.value;
        this.setState({displayValue: this.state.displayValue + target  , waitingNewValue:false})
    } else {
      let target = e.target.value;
      this.setState({
       displayValue: this.state.displayValue + target, waitingNewValue:false})
    }
  }
}

handleChangeSignOperation=(e) => {
 
    let int = -1 * Number(this.state.displayValue)
    int = int.toString();
   this.setState({displayValue: int, waitingNewValue:false})
}

  handleResult =(e) => {
     let num1=  Number(this.state.previousValue)
     let num2 = Number(this.state.displayValue)
    if(this.state.operation === "+" ){
      let result = num1 + num2
      console.log(result)
      this.setState({previousValue: result, displayValue: result, waitingNewValue:true })
    }else if(this.state.operation === "-" ){
      let result = num1 - num2
      this.setState({displayValue: result, waitingNewValue:true })
    }else if(this.state.operation === "*" ){
      let result = num1 * num2
      this.setState({displayValue: result, waitingNewValue:true })
    } else if(this.state.operation === "/" ){
      let result = num1 / num2
      this.setState({displayValue: result, waitingNewValue:true })
    } else if(this.state.operation === "%" ){
      let result = num1 / 100 
      this.setState({displayValue: result, waitingNewValue:true })
  }
}

  render(){
    return(
      <>
      <KeyPad 
      handleNumberClick={this.handleNumberClick} 
      handleOperation={this.handleOperation} 
      handleResult={this.handleResult} 
      handleNumberClear={this.handleNumberClear}
      handleDecimal={this.handleDecimal}
      handleChangeSignOperation={this.handleChangeSignOperation}
      state={this.state}
      />
      </>
    )
  }
}

export default App
