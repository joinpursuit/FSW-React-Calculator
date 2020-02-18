import React from "react"

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
            <h1>Calculator-Lab</h1>
        )
    }
}


export default Calculator;