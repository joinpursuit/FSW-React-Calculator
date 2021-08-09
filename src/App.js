import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import * as math from "mathjs";
import KeyLayout from "./Components/KeyLayout";

const App = () => {
  const [result, setResult] = useState("");
  const [text, setText] = useState("0");

  const addToText = (val) => {
    if (text === "0") {
      setText(val);
    } else {
      setText((text) => [...text, val]);
    }
  };

  const calculateResult = () => {
    const input = text.join("");
    console.log(input);
    setResult(math.evaluate(input));
  };

  const clearText = () => {
    setText("0");
    setResult("");
  };

  const calculatePercentage = (val) => {
    let input = text;
    if (text.length > 1) {
      input = text.join("");
    }
    if (text === "0") {
      setText("0");
    } else {
      const percent = input / 100;
      console.log(percent)
      const help = [...text]
      console.log(help)
      // setText((text) => [...text, percent]);
    }
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
          result={result}
          text={text}
        />
      </div>
    </div>
  );
};

export default App;
