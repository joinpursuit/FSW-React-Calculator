import React from 'react'
import '../App.css';
import DisplayValue from './DisplayValue'

class Button extends React.Component {
    state = {
        displayValue: 0,
        prevValue: null,
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "=", ".", "clear"]
    }
    
    loadValue = (value) => { //function to change state of displayValue/prevValue states
        const { displayValue, prevValue } = this.state
        const operators = ["+", "-", "/", "*", ".", "clear"]

        if(operators.includes(value)) { //conditions for operators
            if(value === "clear") { this.clearOperator() } //clears display value and not prev value
        //     // debugger
        //     if(value === ".") { this.setState({displayValue: displayValue + value})} //adds decimal
            
            this.setState({prevValue: displayValue + value}) //adds operator to current value and sets it to prevValue state
            this.setState({displayValue: 0}) //resets value back to 0 when and operator is clicked
        // }
        // else   
        // if(!isNaN(value)) {
        //     this.setState({displayValue: displayValue + value})
        //     this.setState({prevValue: displayValue + value})
        }
        // if(this.state.displayValue === 0){
        //     this.setState({displayValue: value})
        // }
    }
    handleClick = (e) => {
        e.preventDefault(); 
        const { displayValue } = this.state
        
        if(e.target.value === "=") { //when equal button is clicked it will do equation
            this.setState({displayValue: this.equalOperator()})
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
        return equal
    }
    clearOperator = () => {
        this.setState({displayValue: 0, prevValue: null})
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
      const { buttons, displayValue } = this.state
      let calcButtons = buttons.map(button => {
        //   debugger
        return( <button value={button} key={button} onClick={this.handleClick}>{button}</button> )
    })
      return (
        <div className= "buttonContainer">
            <DisplayValue displayValue={this.state.displayValue}/>
          {calcButtons}
          {/* <DisplayValueForm value={displayValue}/>  */}
        </div>
        
      );
    }
    
}


export default Button;