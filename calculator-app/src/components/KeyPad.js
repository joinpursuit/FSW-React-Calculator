import React from "react";

const KeyPad = ({
  handleNumberClick,
  handleOperation,
  handleNumberClear,
  handleDecimal,
  handleResult,
  state
}) => {
  return (
    <div className="calculator">
      <div>
        <h3 type="text" className="calculator-screen" value="0" disabled>
          {state.displayValue}
        </h3>
      </div>

      <div className="calculator-keys">
        <button type="button" className="all-clear" value="all-clear" onClick={handleNumberClear}>
          AC
        </button>
        <button
          type="button"
          className="operation"
          value="+/-"
          onClick={e => handleOperation(e)}
        >
          +/-
        </button>
        <button
          type="button"
          className="operation"
          value="%"
          onClick={e => handleOperation(e)}
        >
          %
        </button>
        <button
          type="button"
          className="operation"
          value="/"
          onClick={e => handleOperation(e)}
        >
          /
        </button>

        <button type="button" value="7" onClick={handleNumberClick}>
          7
        </button>

        <button type="button" value="8" onClick={handleNumberClick}>
          8
        </button>
        <button type="button" value="9" onClick={handleNumberClick}>
          9
        </button>
        <button
          type="button"
          className="operation"
          value="*"
          onClick={e => handleOperation(e)}
        >
          X
        </button>

        <button type="button" value="4" onClick={handleNumberClick}>
          4
        </button>
        <button type="button" value="5" onClick={handleNumberClick}>
          5
        </button>
        <button type="button" value="6" onClick={handleNumberClick}>
          6
        </button>
        <button
          type="button"
          className="operation"
          value="-"
          onClick={e => handleOperation(e)}
        >
          -
        </button>

        <button type="button" value="1" onClick={handleNumberClick}>
          1
        </button>
        <button type="button" value="2" onClick={handleNumberClick}>
          2
        </button>
        <button type="button" value="3" onClick={handleNumberClick}>
          3
        </button>
        <button
          type="button"
          className="operation"
          value="+"
          onClick={e => handleOperation(e)}
        >
          +
        </button>

        <button
          type="button"
          className="zero"
          value="0"
          onClick={handleNumberClick}
        >
          0
        </button>
        <button
          type="button"
          className="decimal"
          value="."
          onClick={e => handleDecimal(e)}
        >
          .
        </button>
        <button
          type="button"
          className="equal-sign"
          value="="
          onClick={handleResult}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default KeyPad;
