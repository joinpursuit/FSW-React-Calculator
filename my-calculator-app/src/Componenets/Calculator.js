import React, {Component} from "react";



class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showValue: "0",
      previousValue: "",
      
    }
  }
  

  render () {
    let {showValue} = this.state
    return (
      <div className="clacBox">
      <div> Display showValue={showValue}</div>
        
        <button handleClick={}> ÷ </button>
        <button handleClick={}> % </button>
        <button handleClick={}> ± </button>
        <button handleClick={}> C </button>
        <button handleClick={}> * </button>
        <button handleClick={}> 9 </button>
        <button handleClick={}> 8 </button>
        <button handleClick={}> 7 </button>
        <button handleClick={}> - </button>
        <button handleClick={}> 6 </button>
        <button handleClick={}> 5 </button>
        <button handleClick={}> 4 </button>
        <button handleClick={}> + </button>
        <button handleClick={}> 3 </button>
        <button handleClick={}> 2 </button>
        <button handleClick={}> 1 </button>
        <button handleClick={}> = </button>
        <button handleClick={}> . </button>
        <button handleClick={}> 0 </button>
      </div>
    )
  }
}

export default Calculator;

