import React from 'react';
import '../css/keypad.css'

class Keypad extends React.Component {
    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name)
    }
    clear = (e) => {
        this.props.clear(e.target.name)
    }

    turnNegative = (e) => {
        this.props.turnNegative(e.target.name)
    }
    render() {
        return (
            <div className="keyboard">
            <button className="equals" type={"button"} onClick={this.buttonPressed} name={"="}>=</button>
             <div className="row1">
                <button type={"button"} name={7} onClick={this.buttonPressed}>7</button>
                <button type={"button"} name={8} onClick={this.buttonPressed}>8</button>
                <button type={"button"} name={9} onClick={this.buttonPressed}>9</button>
                <button className={"operand"} type={"button"} name={"*"} onClick={this.buttonPressed}>*</button>
             </div>

             <div className="row2">
                <button type={"button"} name={4} onClick={this.buttonPressed}>4</button>
                <button type={"button"} name={5} onClick={this.buttonPressed}>5</button>
                <button type={"button"} name={6} onClick={this.buttonPressed}>6</button> 
                <button className={"operand"} type={"button"} name={"-"} onClick={this.buttonPressed}>-</button>  
             </div>

             <div className="row3">
                <button type={"button"} name={1} onClick={this.buttonPressed}>1</button>
                <button type={"button"} name={2} onClick={this.buttonPressed}>2</button>
                <button type={"button"} name={3} onClick={this.buttonPressed}>3</button>
                <button  className={"operand"} type={"button"} name={"+"} onClick={this.buttonPressed}>+</button>
             </div>

             <div className="row4">
                <button className={"operand"} type={"button"} name={"/"} onClick={this.buttonPressed}>/</button>
                <button className={"operand"} type={"button"} name={"+/-"} onClick={this.turnNegative}>+/-</button>
                <button type={"button"} name={0} onClick={this.buttonPressed}>0</button>
                <button className={"operand"} type={"button"} name={"c"} onClick={this.clear}>C</button>
             </div>  
             
            </div>
        )
    }
}

export default Keypad;