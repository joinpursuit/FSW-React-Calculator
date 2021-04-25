import { render } from "@testing-library/react";
import React from "react";

const Keypad =  ({handleClick}) => {
    return (
      <div className="keypad">
        <section className="row">
        <button value="clear">AC</button>
          <button value="posNeg">+/-</button>
          <button value="+">+</button>
        </section>
        <section className="row">
         <button onClick={handleClick} name='1' value="1">1</button>
          <button value="2">2</button>
          <button value="2">3</button>
          <button value="/">/</button>
        </section>
        <section className="row"></section>
        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="-">-</button>
        <section className="row">
          <button value="7">7</button>
          <button value="8">8</button>
          <button value="9">9</button>
          <button value="*">*</button>
        </section>
        <section>
          <button value="0">0</button>
          <button value="=">=</button>

        </section>
      </div>
    );
  }


export default Keypad;
