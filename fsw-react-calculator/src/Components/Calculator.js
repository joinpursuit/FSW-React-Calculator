import React from "react";

class Calculator extends React.Component {
  state = { total: "0", display: [0], defaultDisplay: [0] };

  enterNum = (num) => {
    const { display, defaultDisplay } = this.state;
    let currentNum = num;

    if (display[0] === 0) {
      this.setState({ display: [] });
      this.setState((prevState) => ({
        display: [...prevState.display, currentNum],
      }));
    } else {
      this.setState((prevState) => ({
        display: [...prevState.display, currentNum],
      }));
    }
  };

  render() {
    const { display, defaultDisplay } = this.state;

    return (
      <div>
        <h2>{display}</h2>
        

        <button onClick={() => this.enterNum("1")} value={"1"}>
          1
        </button>
        <button onClick={() => this.enterNum("2")} value={"2"}>
          2
        </button>
        <button onClick={() => this.enterNum("3")} value={"3"}>
          3
        </button>
        <button onClick={() => this.enterNum("4")} value={"4"}>
          4
        </button>
        <button onClick={() => this.enterNum("5")} value={"5"}>
          5
        </button>
        <button onClick={() => this.enterNum("6")} value={"6"}>
          6
        </button>
        <button onClick={() => this.enterNum("7")} value={"7"}>
          7
        </button>
        <button onClick={() => this.enterNum("8")} value={"8"}>
          8
        </button>
        <button onClick={() => this.enterNum("9")} value={"9"}>
          9
        </button>
        <button onClick={() => this.enterNum("0")} value={"0"}>
          0
        </button>

        <button>&#43;</button>
        <button>&minus;</button>
        <button>&times;</button>
        <button>&divide;</button>
        <button>&#61;</button>
        <button>&#177;</button>
        <button>AC</button>
      </div>
    );
  }
}

export default Calculator;
