import React from "react"

import "../css/calculator.css"

class Calculator extends React.Component{
    state={
            displayValue: 0,
            previousValue: null,
            operation: null,
            waitingForNewValue: false,
            clearBtn:"AC"
    };

    handleNumberClick = (e) => {
        e.persist();
        let {value} = e.target
        let{waitingForNewValue,displayValue}=this.state
        if(waitingForNewValue){
            this.setState({
                waitingForNewValue:false,
                displayValue:value
            })
        }else{
            if(displayValue){
                this.setState((prevState)=>{
                    return {displayValue:prevState.displayValue + value}
                })
            }
            else{
                this.setState({
                    displayValue: value
                })
            }
        }
    }
    handleACClick = (e) => {
        if(this.state.displayValue){
            this.setState({
                displayValue: 0
            })
        }
    }

    handlePercentageClick = (e) =>{
        let {displayValue}=this.state
        this.setState({
            displayValue:displayValue/100
        })
    }

    handleNegPotClick = (e)=>{
        let {displayValue}=this.state
        this.setState({
            displayValue:-displayValue
        })
    }

    handleOperationClick = (e)=>{
        let {name} = e.target
        let {displayValue}=this.state
        // debugger
        this.setState({
            waitingForNewValue:true,
            operation:name,
            previousValue:displayValue,
        })
        console.log(displayValue)
    }

    handleEqualOperationClick = (e)=>{
        let {displayValue,operation,previousValue}=this.state;
        if(operation==="+"){
            this.setState({
                displayValue:Number(previousValue)+ Number(displayValue)
            })
        }
        else if(operation==="-"){
            this.setState({
                displayValue:Number(previousValue) - Number(displayValue)
            })
        }
        else if(operation==="x"){
            this.setState({
                displayValue:Number(previousValue) * Number(displayValue)
            })
        }
        else{
            this.setState({
                displayValue:Number(previousValue)/ Number(displayValue)
            })
        }
    }


    render(){
        console.log(this.state);
        let {displayValue,clearBtn}=this.state;
        return( 
                <div className="display">
                <div className="calculator">
                <div className="col-12 inputview">{displayValue}</div>
                <button className="button col-3" name="AC" onClick={(e)=>{
                this.handleACClick(e)}}>{clearBtn}</button>

                <button className="button col-3" name="%" onClick={(e)=>{
                this.handlePercentageClick(e)}}>%</button> 

                <button className="button col-3" name="±" onClick={(e)=>{
                this.handleNegPotClick(e)}}>±</button> 

                <button className="button col-3 orange" name="÷" onClick={(e)=>{
                this.handleOperationClick(e)}}>÷</button>

                <button className="button col-3"  name="displayValue" value="7" onClick={(e)=>{
                this.handleNumberClick(e)}}>7</button> 

                <button className="button col-3"  name="displayValue" value="8" onClick={(e)=>{
                this.handleNumberClick(e)}}>8</button> 

                <button className="button col-3"  name="displayValue" value="9" onClick={(e)=>{
                this.handleNumberClick(e)}}>9</button> 

                <button className="button col-3 orange" name="x" onClick={(e)=>{
                this.handleOperationClick(e)}}>x</button>

                <button className="button col-3"  name="displayValue" value="3" onClick={(e)=>{
                this.handleNumberClick(e)}}>4</button> 

                <button className="button col-3"  name="displayValue" value="5" onClick={(e)=>{
                this.handleNumberClick(e)}}>5</button> 

                <button className="button col-3"  name="displayValue" value="6" onClick={(e)=>{
                this.handleNumberClick(e)}}>6</button> 

                <button className="button col-3 orange" name="-" onClick={(e)=>{
                this.handleOperationClick(e)}}>-</button>

                <button className="button col-3"  name="displayValue" value="1" onClick={(e)=>{
                this.handleNumberClick(e)}}>1</button> 

                <button className="button col-3"  name="displayValue" value="2" onClick={(e)=>{
                this.handleNumberClick(e)}}>2</button> 

                <button className="button col-3"  name="displayValue" value="3" onClick={(e)=>{
                this.handleNumberClick(e)}}>3</button> 

                <button className="button col-3 orange"  name="+" onClick={(e)=>{
                this.handleOperationClick(e)}}>+</button>

                <button className="button col-6"  name="displayValue" value="0" onClick={(e)=>{
                this.handleNumberClick(e)}}>0</button> 

                <button className="button col-3"  name="displayValue" value="." onClick={(e)=>{
                this.handleNumberClick(e)}}>.</button> 

                <button className="button col-3 orange"  name="=" onClick={(e)=>{
                this.handleEqualOperationClick(e)}}>=</button>

                </div>
            </div>
       
       )
    }
}


export default Calculator;