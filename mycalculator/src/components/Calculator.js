import React from "react"
import "../css/calculator.css"

class Calculator extends React.Component{
    state={
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
    };

    render(){
        let {displayValue,previousValue,operation,waitingForNewValue}=this.state;
        return(
           <div className="display">

            <div className="calculator">
            <div className="col-12 inputview">0</div>
            <button className="button col-3">AC</button>
            <button className="button col-3">%</button> 
            <button className="button col-3">±</button> 
            <button className="button col-3 orange">÷</button>
            <button className="button col-3">7 </button> 
            <button className="button col-3">8</button> 
            <button className="button col-3">9</button> 
            <button className="button col-3 orange">x</button>
            <button className="button col-3">4</button> 
            <button className="button col-3">5</button> 
            <button className="button col-3">6</button> 
            <button className="button col-3 orange">-</button>
            <button className="button col-3">1</button> 
            <button className="button col-3">2</button> 
            <button className="button col-3">3</button> 
            <button className="button col-3 orange">+</button>
            <button className="button col-6">0</button> 
            <button className="button col-3">.</button> 
            <button className="button col-3 orange">=</button>

            </div>
           </div>

        )
    }
}


export default Calculator;