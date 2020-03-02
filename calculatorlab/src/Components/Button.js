import React from 'react'
import '../App.css';
import DisplayValue from './DisplayValue'

class Button extends React.Component {
    state = {
        displayValue: 0,
        prevValue: null,
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "=", "clear", "+-"]
    }
    
    loadValue = (value) => { //function to change state of displayValue/prevValue states
        const { displayValue } = this.state
        const operators = ["+", "-", "/", "*", ".", "clear"]
        let operCondition = operators.includes(value)

        if(operCondition) { //conditions for operators
            console.log(operCondition);
            debugger
            
            if(value === "clear") { this.clearOperator() } //clears display value and not prev value
             // debugger
            if(value === ".") { //adds decimal if it doesnt exist is dislay value
                this.decimalOperator(value)
            }
            // else   
            this.setState({prevValue: displayValue + value}) //adds operator to current value and sets it to prevValue state
            this.setState({displayValue: 0}) //resets value back to 0 when and operator is clicked
        }
    }
    handleClick = (e) => {
        e.preventDefault(); 
        const { displayValue } = this.state
        
        if(e.target.value === "=") { //when equal button is clicked it will do equation
            this.equalOperator()
        }else if(e.target.value === ".") {
            this.decimalOperator(e.target.value)
        }else if(displayValue === 0) { //condition to fix undefined error on joining inputs
            this.setState({displayValue: e.target.value})
         } else {
             this.setState({displayValue: displayValue + e.target.value})  
         }
        return( //returning the function that changes the state of my values
            this.loadValue(e.target.value) 
        ) 
      }

    equalOperator = () => {
        const { displayValue, prevValue } = this.state
        let equal = eval(prevValue + displayValue)
        this.setState({displayValue: equal })
    }

    clearOperator = () => {
        this.setState({displayValue: 0, prevValue: null})
    }

    decimalOperator = (decimal) => {
        const { displayValue } = this.state
        if(displayValue.split().includes(".")) { 
            return this.setState({ displayValue: displayValue }) 
        }else {
            return this.setState({ displayValue: displayValue + decimal})
        }
    }  

    display = (value) => {
        return (
            <div>
                <p>{value}</p> 
            </div>
        )
    }
    
    render() {
        console.log(this.state)
      const { buttons } = this.state
      let calcButtons = buttons.map(button => {
        //   debugger
        return( <button value={button} key={button} onClick={this.handleClick}>{button}</button> )
    })
      return (
        <div className= "buttonContainer">
            <DisplayValue displayValue={this.state.displayValue}/>
            {calcButtons}
        </div>
      );
    } 
}


export default Button;