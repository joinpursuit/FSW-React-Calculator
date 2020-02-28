import React from "react";

const Buttons = () => {
  return (
    <div className="grid-container">
      <div className="display"></div>
      <div className="zero">
        <button name="0" value="0">
          0
        </button>
      </div>
      <div className="dot">
        <button name="." value=".">
          .
        </button>
      </div>
      <div className="equal">
        <button name="=" value="=">
          =
        </button>
      </div>
      <div className="ac">
        <button name="ac" value="ac">
          AC
        </button>
      </div>
      <div className="percent">
        <button name="%" value="%">
          %
        </button>
      </div>
      <div className="negPos">
        <button name="-+" value="-+">
          -+
        </button>
      </div>

      <div className="divide">
        <button name="/" value="/">
          /
        </button>
      </div>
      <div className="multiply">
        <button name="*" value="*">
          *
        </button>
      </div>
      <div className="subtract">
        <button name="-" value="-">
          -
        </button>
      </div>
      <div className="add">
        <button name="+" value="+">
          +
        </button>
      </div>
      <div className="seven">
        <button name="7" value="7">
          7
        </button>
      </div>
      <div className="eight">
        <button name="8" value="8">
          8
        </button>
      </div>
      <div className="nine">
        <button name="9" value="9">
          9
        </button>
      </div>
      <div className="four">
        <button name="4" value="4">
          4
        </button>
      </div>
      <div className="five">
        <button name="5" value="5">
          5
        </button>
      </div>
      <div className="six">
        <button name="6" value="6">
          6
        </button>
      </div>
      <div className="one">
        <button name="1" value="1">
          1
        </button>
      </div>
      <div className="two">
        <button name="2" value="2">
          2
        </button>
      </div>
      <div className="three">
        <button name="3" value="3">
          3
        </button>
      </div>
    </div>
  );
};

export default Buttons;
