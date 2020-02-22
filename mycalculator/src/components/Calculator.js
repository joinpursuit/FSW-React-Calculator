import React from "react"
import Display from "./display"
// import "../css/calculator.css"

class Calculator extends React.Component{
    state={
            displayValue: '0',
            previousValue: null,
            operation: null,
            waitingForNewValue: false
    };



    render(){
        // console.log(this.state);
        // let {displayValue,previousValue,operation,waitingForNewValue}=this.state;
        return(

          <Display/>

        )
    }
}


export default Calculator;