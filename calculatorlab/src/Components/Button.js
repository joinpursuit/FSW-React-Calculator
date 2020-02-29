import React from 'react'
import DisplayValueForm from './DisplayValueForm'

class Button extends React.Component {
    state = {
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "=", ".", "clear"],
        displayValue: "",
        prevValue: ""
    }
    loadValue = (value) => {
        this.setState({display:this.state.display + value})
        console.log(this.state.display); 
    }
    handleClick = (e) => {
        e.preventDefault(); 
        const { displayValue, prevValue } = this.state
        const operators = ["+", "-", "/", "*"]
        if(isNaN(e.target.value) ){
            if(operators.includes(e.target.value)) {

            }
        }
        if(displayValue === "") {
            this.setState({displayValue: e.target.value})
        } else {
            this.setState({displayValue: displayValue + e.target.value})  
        }

             
        return(
            this.loadValue(e.target.value) 
        ) 
      }
    operation = (operator) => {
        const { displayValue, prevValue } = this.state
        let equal = prevValue + operator + displayValue
        this.setState({displayValue: equal})
    }
        
    display = (value) => {
        return (
            <div>
                <p>{value}</p> 
            </div>
        )
    }
    render() {
      const { buttons, displayValue } = this.state
      let calcButtons = buttons.map(button => {
        //   debugger
        return( <button value={button} key={button} onClick={this.handleClick}>{button}</button> )
    })
      return (
        <div className= "buttonContainer">
          {calcButtons}
          {/* <DisplayValueForm value={displayValue}/>  */}
        </div>
        
      );
    }
    
}


export default Button;