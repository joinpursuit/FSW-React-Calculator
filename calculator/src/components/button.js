import React, { Component } from 'react'
import './master.css'

class Button extends Component{
    state = {

    }

    render(){
        return (
    <div className="allButtons">
        <div className="allNumbers">
            <button className="0">0</button>
            <button className="1">1</button>
            <button className="2">2</button>
            <button className="3">3</button>
            <button className="4">4</button>
            <button className="5">5</button>
            <button className="6">6</button>
            <button className="7">7</button>
            <button className="8">8</button>
            <button className="9">9</button>
        </div>
         <div className="operators">
            <button className="+">+</button>
            <button className="-">-</button>
            <button className="*">*</button>
            <button className="/">/</button>
            <button className="=">=</button>
            <button className="clear">C</button>

        </div>
    </div>
        )
    }
}

export default Button;