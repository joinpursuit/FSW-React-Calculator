import React, { Component } from "react";

class Keypad extends Component {
  state = {
    names: [
      "AC",
      "+/-",
      "%",
      "/",
      7,
      8,
      9,
      "*",
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

  buttonClicked = e => {
    const {
      buttonClicked,
      displayValue,
      previousValue,
      isPrevious
    } = this.props;
    buttonClicked(e.target.name);
    const { names } = this.state;
    if (displayValue !== "" && isPrevious === false) {
      // debugger;
      let newNames = names.map(name => (name === "C" ? (name = "AC") : name));
      this.setState({ names: newNames });
    } else if (
      isPrevious === true ||
      (previousValue === "" && isPrevious === false)
    ) {
      let newNames = names.map(name => (name === "AC" ? (name = "C") : name));
      this.setState({ names: newNames });
    }
  };

  render() {
    let { names } = this.state;
    let nameList = names.map((name, i) => {
      if (
        typeof name === "number" ||
        name === "AC" ||
        name === "C" ||
        name === "+/-" ||
        name === "%" ||
        name === "."
      )
        return (
          <button
            className={"number"}
            id={"id" + name}
            key={i}
            name={name}
            onClick={this.buttonClicked}
          >
            {name}
          </button>
        );
      else {
        return (
          <button
            className={"character"}
            id={"id" + name}
            key={i}
            name={name}
            onClick={this.buttonClicked}
          >
            {name}
          </button>
        );
      }
    });
    return <>{nameList}</>;
  }
}

export default Keypad;
