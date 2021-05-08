import React from 'react';
import './Buttons.css'; 

const Buttons = (props) =>  {
   
   return (
        <div className="calculator-container">
          
           <div className ="row">
                <button onClick={() => props.handleClick(props.children)} className="buttons">AC</button> 
                <button onClick={() => props.handleClick(props.children)}className="buttons">+/-</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">%</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons" id="operator" >÷</button>
             </div>

             <div className ="row">
                <button onClick={() => props.handleClick(props.children)}className="buttons">7</button> 
                <button onClick={() => props.handleClick(props.children)}className="buttons">8</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">9</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons" id="operator">x</button>
             </div>

             <div className ="row">
                <button onClick={() => props.handleClick(props.children)}className="buttons">4</button> 
                <button onClick={() => props.handleClick(props.children)}className="buttons">5</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">6</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons" id="operator">-</button>
             </div>

             <div className ="row">
                <button onClick={() => props.handleClick(props.children)}className="buttons">1</button> 
                <button onClick={() => props.handleClick(props.children)}className="buttons">2</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">3</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons" id="operator">+</button>
             </div>

             <div className ="row">
                <button onClick={() => props.handleClick(props.children)}className="buttons">0</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">00</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons">.</button>
                <button onClick={() => props.handleClick(props.children)}className="buttons" id="operator">=</button>
                
             </div>

        </div>
    )
}

export default Buttons;