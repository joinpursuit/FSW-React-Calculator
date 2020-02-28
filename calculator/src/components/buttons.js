import React from "react";

const Buttons = ({ currentVal, numButtonsHandler, clearButtonHandler }) => {
  return (
    <div className="grid-container">
      <div className="display">
        <h1>{currentVal}</h1>
      </div>
      <div className="zero">
        <button onClick={numButtonsHandler} name="0" value="0">
          0
        </button>
      </div>
      <div className="dot">
        <button onClick={numButtonsHandler} name="." value=".">
          .
        </button>
      </div>
      <div id="opperator" className="equal">
        <button id="opperator" name="=" value="=">
          =
        </button>
      </div>
      <div className="ac">
        <button onClick={clearButtonHandler} name="ac" value="ac">
          AC
        </button>
      </div>
      <div className="percent">
        <button name="%" value="%">
          %
        </button>
      </div>
      <div className="negPos">
        <button id="neggPos" name="-+" value="-+">
          +
        </button>
      </div>

      <div className="divide">
        <button id="opperator" name="/" value="/">
          /
        </button>
      </div>
      <div className="multiply">
        <button id="opperator" name="*" value="*">
          *
        </button>
      </div>
      <div className="subtract">
        <button id="opperator" name="-" value="-">
          -
        </button>
      </div>
      <div className="add">
        <button id="opperator" name="+" value="+">
          +
        </button>
      </div>
      <div className="seven">
        <button onClick={numButtonsHandler} name="7" value="7">
          7
        </button>
      </div>
      <div className="eight">
        <button onClick={numButtonsHandler} name="8" value="8">
          8
        </button>
      </div>
      <div className="nine">
        <button onClick={numButtonsHandler} name="9" value="9">
          9
        </button>
      </div>
      <div className="four">
        <button onClick={numButtonsHandler} name="4" value="4">
          4
        </button>
      </div>
      <div className="five">
        <button onClick={numButtonsHandler} name="5" value="5">
          5
        </button>
      </div>
      <div className="six">
        <button onClick={numButtonsHandler} name="6" value="6">
          6
        </button>
      </div>
      <div className="one">
        <button onClick={numButtonsHandler} name="1" value="1">
          1
        </button>
      </div>
      <div className="two">
        <button onClick={numButtonsHandler} name="2" value="2">
          2
        </button>
      </div>
      <div className="three">
        <button onClick={numButtonsHandler} name="3" value="3">
          3
        </button>
      </div>
    </div>
  );
};

export default Buttons;
