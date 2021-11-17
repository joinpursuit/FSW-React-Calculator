import './App.css';
import {Component} from "react";
import Button from './components/Button';
import data from './components/ButtonData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      buttons: data.buttonData,
      result: 0,
      num1: "",
      num2: "",
      operation:"",
      isOperator: false,
      display: "0",
    }
  }

  handleDisplay = (btn) => {
    if(!this.state.isOperator){
      this.setState({
        display: this.state.display + btn.value,
        num1: this.state.display + btn.value,
      }) 
    } else {
      this.setState({
        display: this.state.display + btn.value,
        num2: this.state.display + btn.value,
      })
    }
  }

  handleOperation = (e) => {
    this.setState({
      operation: e.target.value,
      isOperator:true,
      display:"",
    })
  }

  handleCalculation = () => {
    let {num1, num2} = this.state;
    let total=0;
      switch(this.state.operation) {
        case "/":
          total = Number(num1) / Number(num2);
          break;
        case "X":
          total = Number(num1) * Number(num2);
          break;
        case "-":
          total = Number(num1) - Number(num2);
          break;
        case "+":
          total = Number(num1) + Number(num2);
          break;
        default: 
        break;   
      }
      this.setState({
        result: total,
        display: total,
        isOperator:false, 
      })
  }

  handleInverse = () => {

  }
    // else if(btn.type==="number"){
    //   this.setState({
    //     num1: this.state.num1 + btn.display,
    //     display: this.state.num1 + btn.display
    //   })
    // }
  
  
  handleReset = () => {
    this.setState({
      result:"0",
      num1: "",
      num2: "",
      operation: "",
      display:"",
    })
  }
  render() {
    let numbersButton= this.state.buttons.map((btn, i)=> <button className="button" value={btn.display} key={btn.value} onClick={()=> this.handleDisplay(btn)}> {btn.display} </button>)
    // console.log(this.state.operation);
    console.log(this.state.num1, this.state.num2)
    return (
      <main className="App">
        <div className="wrapper">
          <div id="display-screen">

          {this.state.display}

          </div>
          <div id="calculator-container">
          {numbersButton}
          <button className="button" value="clear" onClick={this.handleReset}> C </button>
          <button className="button" value="inverse" onClick={this.handleOperation}> +- </button>
          <button className="button" value="%" onClick={this.handleOperation} id="percentage"> % </button>
          <button className="button" value="/" onClick={this.handleOperation} is> / </button>
          <button className="button" value="X" onClick={this.handleOperation}> X </button>
          <button className="button" value="-" onClick={this.handleOperation}> - </button>
          <button className="button" value="+" onClick={this.handleOperation}> + </button>
          <button className="button" value="." onClick={this.handleOperation}> . </button>
          <button className="button" value="√" onClick={this.handleOperation}> √ </button>
          <button className="button" value="=" onClick={this.handleCalculation}> = </button>

          </div>
          8.2 calculator
      </div>
      </main>
    );
  }
}

export default App;
