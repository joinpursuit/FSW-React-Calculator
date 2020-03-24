import React, { Component, useState } from 'react';
import './App.css';
import Keypad from './components/Keypad'
import Output from './components/Output'

function App () {
  const [ result, setResult ] = useState("")
  const negative = -1
  const buttonPressed = (name) => {
    if (name === "=") {
      calculate()
    } else {
      setResult(null)
      setResult(result + name)
    }
  }

  const turnNegative = (name) => {
    if (name === "+/-") {
      setResult(result * negative)
    }
  }
  const clear = (name) => {
    if (name === "c") {
      setResult(null)
      setResult(0)
    }
  }
  const calculate = () => {
    setResult(eval(result))
    if (!result) {
      setResult(0)
    }
  }

  return (
    <div className="App">
    <Output results={result}/>
      <Keypad buttonPressed={buttonPressed} clear={clear}  turnNegative={turnNegative}/>
    </div>
  );
}

export default App;
