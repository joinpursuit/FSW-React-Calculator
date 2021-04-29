import React from 'react';
import './Buttons.css'; 

const Buttons = (props) => {
    const {value, operators} = props;

    return (
        <div className="calcu-Container">
            <div className ="row">
                <button className="button-wrapper">AC</button> 
                <button className="button-wrapper">+/-</button>
                <button className="button-wrapper">%</button>
                <button className="button-wrapper" id="operator" >/</button>
             </div>

             <div className ="row">
                <button className="button-wrapper">7</button> 
                <button className="button-wrapper">8</button>
                <button className="button-wrapper">9</button>
                <button className="button-wrapper" id="operator">X</button>
             </div>

             <div className ="row">
                <button className="button-wrapper">4</button> 
                <button className="button-wrapper">5</button>
                <button className="button-wrapper">6</button>
                <button className="button-wrapper" id="operator">-</button>
             </div>

             <div className ="row">
                <button className="button-wrapper">1</button> 
                <button className="button-wrapper">2</button>
                <button className="button-wrapper">3</button>
                <button className="button-wrapper" id="operator">+</button>
             </div>

             <div className ="row">
                <button className="button-wrapper">0</button>
                <br></br> 
                <button className="button-wrapper">.</button>
                <button className="button-wrapper" id="operator">=</button>
                
             </div>

        </div>
    )
}

export default Buttons;