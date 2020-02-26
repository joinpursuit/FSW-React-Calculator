import React, { Component } from 'react'
// import Button from './button'
import Display from './display'
import './master.css'

class Calculator extends Component {
    state = {
        displayValue: "0",
        prevValue: null,
        operation: null
    }


    handleNumberClick = (e) => {
        //e.persist()
        const newNum = e.target.value
        if(this.state.displayValue === "0"){
            this.setState({displayValue: e.target.value})
        }else{
            
            this.setState(prevState=>({
                displayValue: prevState.displayValue + newNum
            
        }))
    
    }
    }

    render(){
       
        
        return(
        <div>
   
        <Display state={this.state} handleNumberClick={this.handleNumberClick}/>
        </div>
        
        )
    }
}

export default Calculator;