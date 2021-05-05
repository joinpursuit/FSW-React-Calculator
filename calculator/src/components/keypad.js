import { render } from "@testing-library/react";
import React from "react";


const Keypad =  ({handleClick, handleClear, posNeg, handleOperator, calculate}) => {
 
    return (
      <div className="keypad">
        <section className="row">
        <button onClick={handleClear} value="clear">AC</button>
          <button onClick={posNeg} value="posNeg">+/-</button>
          <button onClick={handleOperator} value="+">+</button>
        </section>
        <section className="row">
         <button onClick={handleClick} name='1' value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleOperator} value="/">/</button>
        </section>
        <section className="row"></section>
        <button onClick={handleClick} value="4">4</button>
        <button onClick={handleClick} value="5">5</button>
        <button onClick={handleClick} value="6">6</button>
        <button onClick={handleOperator} value="-">-</button>
        <section className="row">
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleOperator} value="*">x</button>
        </section>
        <section>
          <button onClick={handleClick} value="0">0</button>
          <button onClick={calculate} value="=">=</button>

        </section>
      </div>
    );
  }


export default Keypad;
