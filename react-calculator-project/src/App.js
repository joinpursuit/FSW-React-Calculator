import { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends Component{
  // constructor(){
  //   super();
  // }

  render(){
    return (
      <div className="App">
        Hello Calculator
        <Calculator />
      </div>
    );
  }
}

export default App;
