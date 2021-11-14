import { Component } from 'react';
import Keypad from './components/Keypad';
import './App.css';

class App extends Component {
  render() {
    return(
        <div id = "calculator-container">
          <h1>CALCULATOR</h1>
          <Keypad />
        </div>

    )
  }
}

export default App;
