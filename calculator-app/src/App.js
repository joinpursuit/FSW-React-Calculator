import React, { Component } from 'react';
import Keypad from './components/keypad';
import Result from './components/result';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      result: ''
    }
  }

  onClick = button => {

   
    if(button === "C"){
        this.reset()
    }
    else if(button === "AC"){
        this.backspace()
    }
    else if(button ==='+/-'){
      this.negative()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

negative=()=>{
  this.setState({
    result: this.state.result * -1
  })
}



reset = () => {
    this.setState({
        result: ""
    })
};

backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
};

  render(){
    return (

    <div className="App" id='app-container'>
      <div class='animation' >
         <div class="box">
          <div class="inner">
           <span>Calculator</span>
            </div>
          <div class="inner">
              <span>Calculator</span>
          </div>
        </div>

       </div>
        <Result result={this.state.result}/>
        <Keypad onClick={this.onClick}/>
     </div>
  );
  }
  
}



export default App;
