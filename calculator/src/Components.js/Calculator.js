import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <div className="Display">0</div>
        <button className="TopRow">C</button>
        <button className="TopRow">%</button>
        <button className="Operator">÷</button>
        <button className="SecondRow">7</button>
        <button className="SecondRow">8</button>
        <button className="SecondRow">9</button>
        <button className="Operator">x</button>
        <button className="ThirdRow">4</button>
        <button className="ThirdRow">5</button>
        <button className="ThirdRow">6</button>
        <button className="Operator">-</button>
        <button className="FourthRow">1</button>
        <button className="FourthRow">2</button>
        <button className="FourthRow">3</button>
        <button className="Operator">+</button>
        <button className="BottomRow">0</button>
        <button className="BottomRow">.</button>
        <button className="BottomRow">±</button>
        <button className="Operator">=</button>
      </div>
    );
  }
}

export default Calculator;
