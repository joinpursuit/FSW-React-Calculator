import React from "react";

const ButtonPad = ({ currentValue, handleChange, handleOperation, handleClear }) => {
  return (
    <div className="buttons">
      <div className="answer">
        <p className="answerP">{currentValue}</p>
      </div>
      <div className="buttonPad">
      
      
        <input
          className="inputs"
          id="clear"
          type="button"
          value="AC"
          onClick={handleClear}
          name="AC"
        ></input>

        <input
          className="inputs"
          id="equals"
          type="button"
          value="="
          onClick={handleChange}
          name="="
        ></input>

        <input
          className="inputs"
          id="plus"
          type="button"
          value="+"
          onClick={handleOperation}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="minus"
          type="button"
          value="-"
          onClick={handleOperation}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="times"
          type="button"
          value="x"
          onClick={handleOperation}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="divs"
          type="button"
          value="/"
          onClick={handleOperation}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="pn"
          type="button"
          value="+|-"
          onClick={handleChange}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="percent"
          type="button"
          value="%"
          onClick={handleChange}
          name="operation"
        ></input>

        <input
          className="inputs"
          id="decimal"
          type="button"
          value="."
          onClick={handleChange}
          name="operation"
        ></input>

        <br />

        <input
          className="inputs"
          type="button"
          value="9"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="8"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="7"
          onClick={handleChange}
          name="num"
        ></input>

        <br />

        <input
          className="inputs"
          type="button"
          value="6"
          onClick={handleChange}
          name="num"
        ></input>
        <input
          className="inputs"
          type="button"
          value="5"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="4"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="3"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="2"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="1"
          onClick={handleChange}
          name="num"
        ></input>

        <input
          className="inputs"
          type="button"
          value="0"
          onClick={handleChange}
          name="num"
        ></input>
      </div>
    </div>
  );
};

export default ButtonPad;
