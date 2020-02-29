import React from 'react'
// import DisplayValueForm from './DisplayValueForm'

class Button extends React.Component {
    state = {
        displayValue: 0,
        prevValue: "",
        buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "/", "*", "=", ".", "clear"]
    }
    loadValue = (value) => { //function to change state of displayValue/prevValue states
        const { displayValue, prevValue } = this.state
        const operators = ["+", "-", "/", "*", "=", ".", "clear"]
        if(operators.includes(value)) {
            if(value === "clear") { this.setState({displayValue: 0})} //clears display value and not prev value
            if(value === "="){ this.setState({ displayValue: prevValue + displayValue }) } //does the equation for prev and current value
            if(value === ".") { this.setState({displayValue: displayValue + value})} //adds decimal
            
            this.setState({prevValue: displayValue + value}) //adds operator to current value and sets it to prevValue state
            this.setState({displayValue: 0}) //resets value back to 0 when and operator is clicked

        }
        if(this.state.displayValue === 0){
            this.setState({displayValue: value})
        }else {
            this.setState({displayValue: this.state.displayValue + value})

        } 
    }
    handleClick = (e) => {
        e.preventDefault(); 
        const { displayValue } = this.state
        const operators = ["+", "-", "/", "*"]
        if(isNaN(e.target.value) ){  //condition for operators
            if(operators.includes(e.target.value)) {
                console.log(e.target.value);
                
            }
        }
        if(displayValue === 0) { //condition to fix undefined error on joining inputs
            this.setState({displayValue: e.target.value})
        } else {
            this.setState({displayValue: displayValue + e.target.value})  
        }
     
        return( //returning the function that changes the state of my values
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
        console.log(this.state)
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