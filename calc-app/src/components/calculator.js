import React from "react";
import Button from "./Buttons";

class Calculator extends React.Component {
  state = {
    numSigns: [
      "C",
      `+/-`,
      `%`,
      `÷`,
      7,
      8,
      9,
      `x`,
      4,
      5,
      6,
      "-",
      1,
      2,
      3,
      "+",
      0,
      ".",
      "="
    ]
  };

  render() {
    let calBtn = this.state.numSigns.map(numSign => {
      if (typeof numSign === "number") {
        return (
          <Button
            Name={"number"}
            numSign={numSign}
            key={numSign}
            id={numSign}
            value={numSign}
            handleFun={this.props.handleNum}
          />
        );
      } else if (numSign === "C") {
        return (
          <Button
            Name={"C"}
            numSign={numSign}
            key={numSign}
            id={numSign}
            value={numSign}
            handleFun={this.props.handleClear}
          />
        );
      } else {
        return (
          <Button
            Name={"sign"}
            numSign={numSign}
            key={numSign}
            id={numSign}
            value={numSign}
            handleFun={this.props.handleSign}
          />
        );
      }
    });

    return <>{calBtn}</>;
  }
}

export default Calculator;
