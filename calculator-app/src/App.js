import React, { Component } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import * as math from 'mathjs';
//import Clear from './Components/Clear';

class App extends Component {
  constructor() {
    super()
    this.state = {
      result: '0',
    };
    this.handleClear = this.handleClear.bind(this);
  };

  handleButtonClick = (button) => {
    const { result } = this.state;
    //let commaNum = result.toLocaleString('en-US')
    if(result === '0') {
      this.setState({ result: '' + button})
    } 
    // else if (result.length >= 3) {
    //   this.setState({ result: result.toLocaleString('en-US') + button})
    // } 
    else {
      this.setState({
        //result: result.toString() + button 
        result: result + button
      })
    };
  };

  handleClear = (button) => {
    this.setState({
      result: '0'
    });
  };

  handleEqual = (button) => {
    
    this.setState({
      result: Math.round(math.evaluate(this.state.result))
    });
  };
  
  handleSign = (button) => {
    this.setState({
      result: this.state.result * -1
    });
  };

  render() {
    const { result } = this.state;
    let commaNum = result.toLocaleString('en-US')
     const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // const operators = ['+', '-', '/', '*', '.']

      if(numArray.includes(result[result.length - 1])) {
        commaNum = result.toLocaleString('en-US')
    }
    //else {
    //     commaNum = result.toLocaleString('en-US')
    //   };
    
    console.log(result)
    //console.log(commaNum)
    return (
      <section className='calc-container'>
      <div className='calculator'>
        <p className='result'>{commaNum}</p>  

        <Buttons 
          className='button-container' 
          buttonClick={this.handleButtonClick} 
          handleSign={this.handleSign}
        />

        <button className='clear' name='clear' value='allClear' onClick={this.handleClear}>AC</button>
        <button className='equal' name='=' value='=' onClick={this.handleEqual}>=</button>
       
      </div>
      </section>
    );
  };
};

export default App;
