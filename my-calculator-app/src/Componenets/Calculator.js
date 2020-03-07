import React, {Component} from "react";


import "../CSS/styleCalc.css";

class Calculator extends Component {
  // constructor(props) {
    // super(props)
    state = {
      displayValue: 0,
      previousValue: null,
      operator: null,
      newValue: false
    // }
  }


  handleNumber = (e) => {
    const { displayValue, newValue } = this.state;
    if(displayValue === "0" || newValue === true) {
      this.setState({
        displayValue: e.target.value
      })
    } else {
      this.setState({
        displayValue: displayValue + e.target.value
      })
    }
  }

  render () {
    let {displayValue} = this.state
    
    
    console.log(this.state)
    return (
      <div className="clacBox">
      
      <div Display displayValue> {displayValue} </div>
        
        <div className="row"> 
        <button > ÷ </button>
        <button > % </button>
        <button > ± </button>
        <button > C </button>
        </div>

        <div className="row">
        <button > * </button>
        <button > 9 </button>
        <button > 8 </button>
        <button > 7 </button>
        </div> 

        <div className="row"> 
        <button > - </button>
        <button > 6 </button>
        <button > 5 </button>
        <button > 4 </button>
        </div>

        <div className="row">
        <button > + </button>
        <button > 3 </button>
        <button > 2 </button>
        <button > 1 </button>
        </div>

        <div className="row"> 
        <button > = </button>
        <button > . </button>
        <button > 0 </button>
        </div>
      </div>
    )
  }
};

export default Calculator;

