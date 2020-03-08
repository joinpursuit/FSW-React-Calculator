import React, {Component} from "react";
import "../CSS/styleCalc.css";


class Calculator extends Component {
  // constructor(props) {
  //   super(props)
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

  handleAC = () => {
    this.setState({displayValue: "0"})
  }

  render () {
    // let {displayValue} = this.state
    
    
    // console.log(this.state)
  return(
    <div className="calcBox">
      <div className="DisplayCalc"> 
      <p> {this.state.displayValue} </p>
      </div>
        <div className="row"> 
        <button value="÷" onClick={this.handleNumber}> ÷ </button>
        <button value="%" onClick={this.handleNumber}> % </button>
        <button value="±" onClick={this.handleNumber}> ± </button>
        <button value="AC" onClick={this.handleAC}> AC </button> 
        </div>

        <div className="row">
        <button value="*" onClick={this.handleNumber}> * </button>
        <button value="9" onClick={this.handleNumber}> 9 </button>
        <button value="8" onClick={this.handleNumber}> 8 </button>
        <button value="7" onClick={this.handleNumber}> 7 </button>
        </div> 

        <div className="row"> 
        <button value="-" onClick={this.handleNumber}> - </button>
        <button value="6" onClick={this.handleNumber}> 6 </button>
        <button value="5" onClick={this.handleNumber}> 5 </button>
        <button value="4" onClick={this.handleNumber}> 4 </button>
        </div>

        <div className="row">
        <button value="+" onClick={this.handleNumber}> + </button>
        <button value="3" onClick={this.handleNumber}> 3 </button>
        <button value="2" onClick={this.handleNumber}> 2 </button>
        <button value="1" onClick={this.handleNumber}> 1 </button>
        </div>

        <div className="row"> 
        <button value="=" onClick={this.handleNumber}> = </button>
        <button value="." onClick={this.handleNumber}> . </button>
        <button value="0" onClick={this.handleNumber}> 0 </button>
        </div>
      </div>
    )
  }
};

export default Calculator;

