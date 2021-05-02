import './App.css';
import React from 'react';
import KeyLayout from './Components/KeyLayout';
import CalcDisplay from  './Components/CalcDisplay';
import { evaluate } from 'mathjs';

export default class App extends React.Component{
  state = {
    input: '',
    result: ''
  }

  onButtonPress = (e) => {
    this.setState({
      result: e.target.value
    })
  }

  handleClear = () => {
    this.setState({
      input: ''
    })
  }

  handleClick = val => {
    const {input} = this.state;
    // console.log(val)
    this.setState({
      input: input + val.icon
    })
  }

  handleEqual = () => {
    const {input} = this.state;
    this.setState({
      input: evaluate(input)
    })
  }

  render() {
    const {result,input} = this.state;
    return (
      <div className="App">
        <div className="CalcBody">
          <CalcDisplay result={result} input={input}/>
          <KeyLayout
            handleEqual={this.handleEqual}
            handleClick={this.handleClick}
            handleClear={this.handleClear}
            onButtonPress={this.onButtonPress}/>
        </div>
      </div>
    );
  }
}
