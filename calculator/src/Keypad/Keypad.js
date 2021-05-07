import React from "react";
import Number from "./Number";
import Operation from "./Operation";

export default function Keypad() {
  return (
    <div className="Buttons">
      <div className="num">A/C</div>
      <div className="num">+/-</div>
      <div className="num">%</div>
      <div className="num">÷</div>
      <div className="num">7</div>
      <div className="num">8</div>
      <div className="num">9</div>
      <div className="num">x</div>
      <div className="num">4</div>
      <div className="num">5</div>
      <div className="num">6</div>
      <div className="num">-</div>
      <div className="num">2</div>
      <div className="num">3</div>
      <div className="num">1</div>
      <div className="num">+</div>
      <div className="num double">0</div>
      <div className="num">.</div>
      <div className="num">=</div>
    </div>
  );
}
