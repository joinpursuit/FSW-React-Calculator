import React from 'react';
import KeyPad from './components/KeyPad'
import './App.css';

class App extends React.Component {
  state = {
    displayValue: 0,
    previousValue: null,
    operation:"",
    waitingNewValue:true
  }

  handleNumberClear = (e) => {
    this.setState({displayValue: 0, previousValue: 0, operation:"", waitingNewValue:true})
  }

  handleNumberClick = (e) => {
    if(this.state.waitingNewValue){
      this.setState({ displayValue : e.target.value, waitingNewValue:false})
    }else {
    if(this.state.displayValue){
      //this.setState({previousValue: this.state.displayValue, displayValue: e.target.value})
      this.setState({previousValue: this.state.displayValue, displayValue: this.state.displayValue + e.target.value})
    } else {

      // this.setState({ displayValue :  e.target.value})
      this.setState({ displayValue : e.target.value})
    }
  }
  }


  handleOperation = (e) =>{
    // debugger
    this.setState({
      previousValue: this.state.displayValue, 
      operation: e.target.value, 
      // displayValue: 0, 
      //previousValue: 0, 
      waitingNewValue:true})

    //this.setState({operation: e.target.value, displayValue: 0, previousValue: 0, waitingNewValue:false})
  }

  handleResult =(e) => {
    // debugger
    if(this.state.operation === "+" ){
      let result = Number(this.state.previousValue) + Number(this.state.displayValue)
      this.setState({displayValue: result, waitingNewValue:true })
    }else if(this.state.operation === "-" ){
      let result = Number(this.state.previousValue) - Number(this.state.displayValue)
      this.setState({displayValue: result, waitingNewValue:true })
    }else if(this.state.operation === "*" ){
      let result = Number(this.state.previousValue) * Number(this.state.displayValue)
      this.setState({displayValue: result, waitingNewValue:true })
    } else if(this.state.operation === "/" ){
      let result = Number(this.state.previousValue) / Number(this.state.displayValue)
      this.setState({displayValue: result, waitingNewValue:true })
    } else if(this.state.operation === "%" ){
      let result = Number(this.state.previousValue) / 100
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
      state={this.state}
      />
      </>
    )
   
  }
}

export default App
