import React from "react";


class Keypad extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            operation: "",
            result: 0,
        }
    }

    handleKeypad = () => {
        
    }

    
    handlePercentage = () => {

    }


    handleEqualButton = () => {

    }

    handlePosNeg = () => {

    }

    handleAllClear = () => {
        this.setState({
            userInput: "",
            operation: "",
            result: 0,
        })
    }


    render() {
        return(
            <div className="keypad-buttons">
                 <button onClick={this.handleAllClear}>AC</button>
                 <button onClick={this.handlePosNeg}>+/-</button>
                 <button onClick={this.handlePercentage}>%</button>
                 <button onClick={this.handleDiv}>DIV</button>
                
                  <button onClick={this.handleKeypad}>7</button>
                  <button onClick={this.handleKeypad}>8</button>
                  <button onClick={this.handleKeypad}>9</button>
                  <button onClick={this.handleMul}>MUL</button>
                        
                  <button onClick={()=>this.handleKeypad(4)}>4</button>
                  <button onClick={this.handleKeypad}>5</button>
                  <button onClick={this.handleKeypad}>6</button>
                  <button onClick={this.handleSub}>MIN</button>

                  <button onClick={this.handleKeypad}>1</button>
                  <button onClick={this.handleKeypad}>2</button>
                  <button onClick={this.handleKeypad}>3</button>
                  <button onClick={this.handleSum}>ADD</button>
                
                  <button onClick={this.handleKeypad}>0</button>
                  <button onClick={this.handleKeypad}>.</button>
                  <button onClick={this.handleEqualButton}>=</button>
            </div>
                
          
            
        )
    }
}

export default Keypad;