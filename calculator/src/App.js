import { Component } from 'react'
import Button from './components/Button';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="calculator-container">
        <div id="display-container">
          <input type="text" className="calculator-screen" value="0" />
        </div>
        <div id="button-container">
          <div className="scientific">
            <button class="calc-button">sin</button>
            <button class="calc-button">cos</button>
            <button class="calc-button">tan</button>
            <button class="calc-button">ln</button>
            <button class="calc-button">log</button>
            <button class="calc-button">!</button>
            <button class="calc-button">&#928;</button>
            <button class="calc-button">e</button>
            <button class="calc-button">^</button>
            <button class="calc-button">(</button>
            <button class="calc-button">)</button>
            <button class="calc-button">&#8730;</button>
          </div>
          <div className="general">
            <div className="digits">
              <button className="calc-button">7</button>
              <button className="calc-button">8</button>
              <button className="calc-button">9</button>
              <button className="calc-button">4</button>
              <button className="calc-button">5</button>
              <button className="calc-button">6</button>
              <button className="calc-button">1</button>
              <button className="calc-button">2</button>
              <button className="calc-button">3</button>
              <button className="calc-button" id="dot">.</button>
              <button className="calc-button">0</button>
              <button className="calc-button" id="equal">=</button>
            </div>
            <div className="operator-side">
              <button className="calc-button" id="erase">⌫</button>
              <button className="calc-button" id="divison">÷</button>
              <button className="calc-button" id="multiplcation">x</button>
              <button className="calc-button" id="subtraction">-</button>
              <button className="calc-button" id="addition">+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
