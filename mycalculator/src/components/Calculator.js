import React from "react"
import "../css/calculator.css"

class Calculator extends React.Component{
    state={
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
    };

    handleButtonClick = (e) => {
        this.setState((prevState,props)=>{
            debugger
            return {
                // displayValue:0
                // displayValue:e.target.innerText
            }
        })
    }

    render(){
        // let {displayValue,previousValue,operation,waitingForNewValue}=this.state;
        return(
           <div className="display">
            <div className="calculator">
            <div className="col-12 inputview">0</div>
            <button className="button col-3">AC</button>
            <button className="button col-3">%</button> 
            <button className="button col-3">±</button> 
            <button className="button col-3 orange">÷</button>
            <button className="button col-3" onClick={this.handleButtonClick}>7 </button> 
            <button className="button col-3" onClick={this.handleButtonClick}>8</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>9</button> 
            <button className="button col-3 orange">x</button>
            <button className="button col-3" onClick={this.handleButtonClick}>4</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>5</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>6</button> 
            <button className="button col-3 orange">-</button>
            <button className="button col-3" onClick={this.handleButtonClick}>1</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>2</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>3</button> 
            <button className="button col-3 orange">+</button>
            <button className="button col-6" onClick={this.handleButtonClick}>0</button> 
            <button className="button col-3" onClick={this.handleButtonClick}>.</button> 
            <button className="button col-3 orange">=</button>

            </div>
           </div>

        )
    }
}


export default Calculator;