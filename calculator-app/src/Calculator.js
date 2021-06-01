import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [operation, setOperation] = useState("");
  const [sign, setSign] = useState("positive");
  const [history, setHistory] = useState("");
  const [operandPressed, setOperandPressed] = useState(false);
  const [previousDisplay, setPreviousDisplay] = useState("");

  const handleDigit = (userInput) => {
    if (operandPressed) {
      setOperandPressed(false);
      setDisplay(userInput);
      setHistory(history + userInput);
    } else if (operation === "=") {
      setHistory("");
      setDisplay(userInput);
      setOperation("");
    } else {
      setDisplay(display + userInput);
      setHistory(history + userInput);
      setPreviousDisplay(previousDisplay + userInput);
    }
  };

  const handleOperand = (userInput) => {
    setOperation(userInput);
    setHistory(display + userInput);
    setPreviousDisplay(display);
    setOperandPressed(true);
  };

  const handleEqual = () => {
    setPreviousDisplay("");
    setHistory(history + "=");
    setOperation("=");
    switch (operation) {
      case "+":
        setDisplay(Number(previousDisplay) + Number(display));
        break;
      case "-":
        setDisplay(Number(previousDisplay) - Number(display));
        break;
      case "x":
        setDisplay(Number(previousDisplay) * Number(display));
        break;
      case "÷":
        setDisplay(Number(previousDisplay) / Number(display));
        break;
      default:
        break;
    }
  };

  const handleDecimal = () => {
    if (!previousDisplay.includes(".")) {
      setPreviousDisplay(previousDisplay + ".");
      setDisplay(display + ".");
      setHistory(history + ".");
    }
  };

  const handleDelete = () => {
    if (display.length === 1 && history.length === 1) {
      setPreviousDisplay("");
      setOperation("");
      setDisplay("");
      setHistory("");
    } else if (operation === "=") {
      handleAllClear();
    } else if (operandPressed) {
      setOperation("");
      setOperandPressed(false);
      setHistory(history.slice(0, -1));
    } else {
      setPreviousDisplay(previousDisplay.slice(0, -1));
      setDisplay(display.slice(0, -1));
      setHistory(history.slice(0, -1));
    }
  };

  const handleAllClear = () => {
    setPreviousDisplay("");
    setDisplay("");
    setHistory("");
    setOperation("");
    setSign("positive");
  };

  const handleSign = () => {
    if (display.length) {
      return sign
        ? (setSign("negative"),
          setPreviousDisplay(previousDisplay * -1),
          setDisplay(display * -1),
          setHistory(history * -1))
        : (setSign("positive"),
          setPreviousDisplay(previousDisplay * -1),
          setDisplay(display * -1),
          setHistory(history * -1));
    }
  };

  const handleZero = () => {
    if (display) {
      setDisplay(display + "0");
      setHistory(history + "0");
    }
  };

  return (
    <section id="calculator">
      <div className="Outter-Container"></div>
      <div className="Inner-Container"></div>
      <section id="screen">
        <p id="history">{history}</p>
        <p id="display">{Number(display).toLocaleString()}</p>
      </section>
      <section id="digits">
        <button className="second-row one" onClick={() => handleDigit("1")}>
          1
        </button>
        <button className="second-row two" onClick={() => handleDigit("2")}>
          2
        </button>
        <button className="second-row three" onClick={() => handleDigit("3")}>
          3
        </button>
        <button className="third-row four" onClick={() => handleDigit("4")}>
          4
        </button>
        <button className="third-row five" onClick={() => handleDigit("5")}>
          5
        </button>
        <button className="third-row six" onClick={() => handleDigit("6")}>
          6
        </button>
        <button className="fourth-row seven" onClick={() => handleDigit("7")}>
          7
        </button>
        <button className="fourth-row eight" onClick={() => handleDigit("8")}>
          8
        </button>
        <button className="fourth-row nine" onClick={() => handleDigit("9")}>
          9
        </button>
        <button className="fifth-row zero" onClick={handleZero}>
          0
        </button>
        <button className="first-row plus" onClick={() => handleOperand("+")}>
          +
        </button>
        <button className="second-row minus" onClick={() => handleOperand("-")}>
          -
        </button>
        <button
          className="fourth-row divide"
          onClick={() => handleOperand("÷")}
        >
          ÷
        </button>
        <button
          className="third-row multiply"
          onClick={() => handleOperand("x")}
        >
          x
        </button>
        <button className="fifth-row decimal" onClick={handleDecimal}>
          .
        </button>
        <button className="first-row allClear" onClick={handleAllClear}>
          AC
        </button>
        <button className="first-row delete" onClick={handleDelete}>
          DEL
        </button>
        <button className="first-row sign" onClick={handleSign}>
          +/-
        </button>
        <button className="fifth-row equal" onClick={handleEqual}>
          =
        </button>
      </section>
    </section>
  );
};

export default Calculator;
