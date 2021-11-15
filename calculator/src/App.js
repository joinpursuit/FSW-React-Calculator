import { Component } from 'react';
import './App.css';
import data from './data/buttonData';

class App extends Component {

  constructor(){
    super()
    this.state = {
      digits: data.numbers,
      result: 0
    }
  }

  handleButtonDisplay=()=>{
    
  }
  
  render(){
    console.log(this.state.digits)
    let buttonVal = Object.keys(this.state.digits)
    let numArr = this.state.digits.map((num)=>{
      return <button className="button" id={num.value} value={num.value}>{num.digit}</button>
      
    })


    return (
      <div className= "calc-container">
        <div className="display">{this.state.result}</div>
        <div className="button-container">
        {numArr}
        </div>
      </div>
    );
  }
}

export default App;
