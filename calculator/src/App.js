import React, { Component } from 'react'
import "./App.css"
import ResultScreen from './components/ResultScreen'
import Keypad from './Keypad'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      results: 0, 
    }
  }
  render() {
    const {results} = this.state
    return (
      <div className="App">
      <div className="Calculator">
        <ResultScreen results={results}/>
        <Keypad/>
      </div>
      
      </div>
    )
  }
}
