import './App.css';
import {Component } from "react";
import buttonData from './data/buttonData';

class App extends Component {
  constructor(){
    super();
    this.state = {
      buttons: buttonData,
      display: "0",
      num1: 0,
      num2: 0,
      operation:"",
      isTyping: false,
    }
  }

  handleNumberClick = (buttonObj) => {
    if(!this.state.isTyping){
      this.setState({
        num1: this.state.num1 + buttonObj.display
      })
    }else {
      this.setState({
        num2: this.state.num2 + buttonObj.display,
      })
    }
  }

  handleOperatorClick = (buttonObj) => {
    this.setState({
      operation: buttonObj.display,
      isTyping: true,
    })

  }

  handleFeaturesClick = (buttonObj) => {
    console.log("feature")
    switch(buttonObj.value){
      case "inverse":
        console.log('inverse');
        break;
      case "percent":
        console.log("percent");
        break;
      case 'divide': 
        console.log("divide");
        break;
      case "decimal":
        console.log("decimal");
        break;
      case 'radical':
        console.log("radical");
        break; 
      default:
        break;
    }

  }

  handleClearClick = () => {
    this.setState({
      display: "0",
      num1: 0,
      num2: 0,
      operation:"",
      isTyping: false,
    })
  }

  handleCalculation = () => {
    // if(this.state.num2 === ""){
    //   return 
    // }
    console.log('calculate')
    const {num1, num2} = this.state;
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
        display:total,
        num1: total,
        num2: "",
        operation:"",
        isTyping:false, 
      })
      // , ()=> {this.setState({
      //   shouldRun:true,
      // })}
  }

    //when is operator is false what number is being worked on if operator is true what is being worked on
  // handleInverse = (e) => {
  //   const {isOperator, num2, num1} = this.state;
  //   if(!isOperator && num1){
  //     this.setState({
  //       result: num1*-1
  //     })
  //   } else if (!isOperator && num2){
  //     this.setState({
  //       result:num2*-1
  //     })
  //   } 
  // }
  handleInverse = () => {
    const {num1, num2, isTyping} = this.state;
    if(isTyping){
      this.setState({
        num2: -num2,
      })
    } else {
      this.setState({
        num1: -num1,
      })
    }
  }

  handlePercentage = () => {
    const { num1, num2, isTyping,} = this.state;
    if(isTyping){
      this.setState({
        num2: num2/100,
      })
    } else {
      this.setState({
        num1: num1/100,
      })
    }
  }

  render() {

    //Displays all of the buttons
    let displayButtons = this.state.buttons.map((btn, i)=> {
      let presentBtn;
        if(btn.type === "number"){
          presentBtn = <button key= {i} className= "number-button" onClick={()=>this.handleNumberClick(btn)}> {btn.display}</button>
        }
        if(btn.type === "operation"){
          presentBtn = <button key= {i} className= "operation-button" onClick={()=>this.handleOperatorClick(btn)}> {btn.display} </button>
        }
        if(btn.type === "feature"){
          presentBtn = <button key= {i} className= "feature-button" onClick={()=> this.handleFeaturesClick(btn)}> {btn.display}</button>
        }if(btn.type === "equal"){
          presentBtn = <button key= {i} className= "equal-button" onClick={this.handleCalculation}> {btn.display}</button>
        }
        if(btn.type === "clear"){
          presentBtn = <button key= {i} className= "clear-button" onClick={this.handleClearClick}> {btn.display}</button>
        }
        return presentBtn;
    })
    return (
      <main className="App">
        <div className="wrapper">
          <div id="display-screen">

          </div>
          <div id="calculator-container">
            {displayButtons}
          </div>
          8.2 calculator
      </div>
      </main>
    );
  }
}

export default App;
