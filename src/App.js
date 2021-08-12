import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import * as math from "mathjs";
import KeyLayout from "./Components/KeyLayout";

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("0");

  const addToText = (val) => {
    if (
      text === "0" &&
      val !== "+" &&
      val !== "-" &&
      val !== "*" &&
      val !== "/"
    ) {
      setText(val);
    } else {
      setText((text) => [...text, val]);
    }
  };

  const calculateResult = () => {
    let input = text.toString();
    if (text.length > 2) {
      input = text.join("");
    }
    const mathOutput = math.evaluate(input).toString();
    setResult(mathOutput.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    setText("0");
  };

  const clearText = () => {
    setText("0");
    setResult("");
  };

  const calculateNegativity = () => {
    let input = text;
    if (text.length > 1) {
      input = text.join("");
    }
    const negativity = (input * -1).toString();
    setText(negativity);
  };

  const calculatePercentage = (val) => {
    let input = text;
    if (text.length > 2) {
      input = text.join("");
    }
    const percent = input / 100;
    setText(percent.toString());
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <KeyLayout
          calculatePercentage={calculatePercentage}
          addToText={addToText}
          calculateResult={calculateResult}
          clearText={clearText}
          calculateNegativity={calculateNegativity}
          result={result}
          text={text}
        />
      </div>
    </div>
  );
};

export default App;
