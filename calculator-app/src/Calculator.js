import { useState } from "react";
import "./Calculator.css";

// fix trailing double zeros

const Calculator = () => {
  const [previousDisplay, setPreviousDisplay] = useState("");
  const [operation, setOperation] = useState("");
  const [display, setDisplay] = useState("");
  const [sign, setSign] = useState("positive");
  const [history, setHistory] = useState("");
  const [operandPressed, setOperandPressed] = useState(false)

  const handleDigit = (userInput) => {
    if (operation === "=") {
      setHistory("");
      setDisplay(userInput);
      setOperation("");
    } else if (display === "0") {
      setDisplay(...userInput, userInput);
      setHistory(...userInput, userInput);
    } else {
      // this.setState((prevState) => ({
      //   display: prevState.display + userInput,
      //   history: prevState.history + userInput,
      // }));
        setDisplay(display + userInput)
        setHistory(history + userInput)
    }
  };


   // negative zero is displayed after pressing operand
  const handleOperand = (userInput) => {
      setOperation(userInput)
      setHistory(display + userInput)
      setPreviousDisplay(display)
      setDisplay(previousDisplay)
      setOperandPressed(true)
  };

  const handleEqual = () => {
      setPreviousDisplay("")
      setHistory(history + "=")
      setOperation("=")
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


  // error when pressed after numbers are already keyed in
  const handleDecimal = () => {
    if (!previousDisplay.includes(".")) {
        setPreviousDisplay(previousDisplay + ".")
        setDisplay(display + ".")
        setHistory(history + ".")
    }
  };

  const handleDelete = () => {
    if (display.length === 1) {
      setPreviousDisplay("");
      setOperation("");
      setDisplay("0");
      setHistory("");
    } else if (operation === "=") {
      // display shows NaN history shows string
      setPreviousDisplay("previousDisplay.slice(0, -1)");
      setDisplay("display.slice(0, -1)");
      setHistory("history.slice(0, -1)");
    } else {
      setPreviousDisplay(previousDisplay.slice(0, -1));
      setDisplay(display.slice(0, -1));
      setHistory(history.slice(0, -1));
    }
  };

  const handleAllClear = () => {
    setPreviousDisplay("");
    setDisplay("0");
    setHistory("");
    setOperation("");
    setSign("positive");
  };


 
  const handleSign = () => {
    if (sign === "positive") {
      setSign("negative");
      setPreviousDisplay(previousDisplay * -1);
      setDisplay(display * -1);
      setHistory(history * -1);
    } else {
      setSign("positive");
      setPreviousDisplay(previousDisplay * -1);
      setDisplay(display * -1);
      setHistory(history * -1);
    }
  };


  const handleZero = () => {
    if (display !== "0") {
        setDisplay(display + "0")
        setHistory(history + "0")
    }
  };

  // finish function
  // formatNumber = () => {
  //   const { display } = this.state;
  //   if(display !== "") {
  //     // parseInt(display).toLocaleString()
  //     display.toLocaleString()

  //   } else {
  //   }
  // }

  return (
    <section id="calculator">
      <div className="Outter-Container"></div>
      <div className="Inner-Container"></div>
      <section id="screen">
        <p id="history">{history}</p>
        <p id="display">{Number(display).toLocaleString()}</p>
        {/* <p id="display">{display}</p> */}
        {/* <p id="display">{this.formatNumber()}</p> */}
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
