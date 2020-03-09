import React, { Component } from "react";
import "../CSS/styleCalc.css";


class Calculator extends Component {
    state = {
      displayValue: "0",
      previousValue: null,
      operator: null,
      newValue: false
    }
 
  handleNumber = (e) => {
    const { displayValue, newValue } = this.state;
    if(displayValue === "0" || newValue === true) {
      this.setState({
        displayValue: e.target.value
      });
    } else {
      this.setState({
        displayValue: displayValue + e.target.value
      })
    }
  }

  handleC = () => {
    this.setState({displayValue: "0"})
  }

  handleSwitchLogic = () => {
    const  { displayValue, previousValue, operator } = this.state;
      switch(operator) {
    case '÷':
      let result1 = Number(previousValue) / Number(displayValue);
      return this.setState({ displayValue: result1});
    case '*':
      let result2 = Number(previousValue) * Number(displayValue);
      return this.setState({displayValue: result2});
    case '+':
      let result3 = Number(previousValue) + Number(displayValue);
      return this.setState({displayValue: result3})
    case '-':
      let result4 = Number(previousValue) - Number(displayValue);
      return this.setState({displayValue: result4})
  }
 }


 //giving fizzbuzz so find another way to do it
 // handleLogic = () => {
   //   const  { displayValue, previousValue, operator } = this.state;
   
   //   if(operator === "÷") {
     //     let result = Number(previousValue) / Number(displayValue);
     //     this.setState({ displayValue: result});
     
     //   } else if (operator === "*") {
       //     let result = Number(previousValue) * Number(displayValue);
       //     this.setState({displayValue: result})
       
       //   } else if(operator === "+") {
         //     let result = Number(previousValue) + Number(displayValue);
         //     this.setState({displayValue: result})
         
         //   } else if (operator === "-"){
           //     let result = Number(previousValue) - Number(displayValue);
           //     this.setState({displayValue: result})
           //   }
           // }
           
  handleOperator = (e) => {
    const { displayValue } = this.state;
      this.setState({
        displayValue: "",
        previousValue: displayValue,
        operator: e.target.value,
        newValue: true
      });
    };
            
            
  //you can check the first index of your string since that's how you're handling the numbers 
  // and then just add the negative sign if there isn't one
  handleToggle = () => {
    const {displayValue} = this.state
  this.setState({displayValue: displayValue.charAt(0) === "-" ? displayValue.substring(1) : "-" + displayValue})
            }
            
  handleAddCommas = () => {
    const { displayValue, previousValue} = this.state;
  // const arr = str.split('')
  // let previousValue = 0
      for (let i = displayValue.length - 1; i >= 0; i--) {
        if (previousValue === 3) {
          displayValue[i] = displayValue[i] + ',' 
            previousValue = 1
          } else {
          previousValue++
        }
      }
        return displayValue.join('')
   }
            
// console.log(addCommas(str))
            

  render () {
  
  return(
    <div className="calcBox">
      <div className="DisplayCalc"> 
      <p> {this.state.displayValue} </p>
      </div>
        <div className="row"> 
        <button value="AC" onClick={this.handleC}> C </button> 
        <button value="±" onClick={this.handleToggle}> ± </button>
        <button value="%" onClick={this.handleOperator}> % </button>
        <button className="opp" value="÷" onClick={this.handleOperator}> ÷ </button>
        </div>

        <div className="row">
        <button value="7" onClick={this.handleNumber}> 7 </button>
        <button value="8" onClick={this.handleNumber}> 8 </button>
        <button value="9" onClick={this.handleNumber}> 9 </button>
        <button className="opp" value="*" onClick={this.handleOperator}> * </button>
        </div> 

        <div className="row"> 
        <button value="4" onClick={this.handleNumber}> 4 </button>
        <button value="5" onClick={this.handleNumber}> 5 </button>
        <button value="6" onClick={this.handleNumber}> 6 </button>
        <button className="opp" value="-" onClick={this.handleOperator}> - </button>
        </div>

        <div className="row">
        <button value="1" onClick={this.handleNumber}> 1 </button>
        <button value="2" onClick={this.handleNumber}> 2 </button>
        <button value="3" onClick={this.handleNumber}> 3 </button>
        <button className="opp" value="+" onClick={this.handleOperator}> + </button>
        </div>

        <div className="row"> 

        <button value="0" onClick={this.handleNumber}> 0 </button>
        

        <div className="oppPeriod"> 
        <button value="." onClick={this.handleNumber}> . </button>
        </div>

        <div> 
        <button className="opp2Equal" value="=" onClick={this.handleSwitchLogic}> = </button>
        </div>




        </div>
      </div>
    )
  }
};

export default Calculator;

