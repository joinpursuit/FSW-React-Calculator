import React from "react";

export default function Keypad() {
    

  return (
    <div>
      <div className="Buttons">
        <section className="Row">
          <button className="btn">C</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </section>
        <section className="Row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </section>
        <section className="Row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </section>
        <section className="Row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </section>
        <section className="Row">
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </section>
      </div>
    </div>
  );
}
