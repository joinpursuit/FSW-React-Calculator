import { Component } from 'react';
import './App.css';
import ButtonsComp from './components/ButtonsComp';
import AnswerDisp from './components/AnswerDisp';

class App extends Component{
  constructor(){
    super();

      this.state ={
        answer: ""
      }
  }


  // onClick ??


  render(){
    return (
      <div className="App">
         <div className="pursuit-instrument">
          <h1>Pursuit Instruments</h1>
          
          <AnswerDisp anwswer={this.state.answer}/>
          <ButtonsComp />

         </div>
      </div>
  );
 }
}

export default App;
