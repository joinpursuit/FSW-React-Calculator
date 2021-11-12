import { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';

class App extends Component{
  // constructor(){
  //   super();
  // }

  render(){
    return (
      <div className="App">
        Hello Calculator
        <Keypad />
      </div>
    );
  }
}

export default App;
