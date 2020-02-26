import React from 'react';
import KeyPad from './components/KeyPad'
import './App.css';

class App extends React.Component {
  state = {
    displayValue: 0,
    previousValue: null,
    operation:""
  }

  handleNumberClick = (e) => {
    if(this.state.displayValue){
      this.setState({previousValue: this.state.displayValue, displayValue: e.target.value})
    }else{
      this.setState({ displayValue : e.target.value})
    }
  }


  handleOperation = (e) =>{
    // debugger
    this.setState({operation: e.target.value})
  }

  handleResult =(e) => {
    if(this.state.operation === "+" ){
      let result = Number(this.state.displayValue) + Number(this.state.previousValue)
      this.setState({displayValue: result })
    }
    
  }

  render(){
    return(
      <>
      <KeyPad 
      handleNumberClick={this.handleNumberClick} 
      handleOperation={this.handleOperation} 
      handleResult={this.handleResult} 
      state={this.state}
      />
      </>
    )
   
  }
}

export default App
