import React from "react";

class Calculator extends React.Component {
  state = { numbers: [] };

  handleClick(e) {
    this.setState((prevState) => {
      return { numbers: prevState.numbers + e };
    });
  }

  render() {
    const { numbers } = this.state;
    return (
      <section>
        <p id="display">{numbers}</p>
        <button onClick={() => this.handleClick(1)} value={"1"}>
          1
        </button>
        <button onClick={() => this.handleClick(2)} value={"2"}>
          2
        </button>
        <button onClick={() => this.handleClick(3)} value="3">
          3
        </button>
        <button onClick={() => this.handleClick(4)} value="4">
          4
        </button>
        <button onClick={() => this.handleClick(5)} value="5">
          5
        </button>
        <button onClick={() => this.handleClick(6)} value="6">
          6
        </button>
        <button onClick={() => this.handleClick(7)} value="7">
          7
        </button>
        <button onClick={() => this.handleClick(8)} value="8">
          8
        </button>
        <button onClick={() => this.handleClick(9)} value="9">
          9
        </button>
        <button onClick={() => this.handleClick(0)} value="0">
          0
        </button>
        <button onClick={() => this.handleClick("+")} value="+">
          +
        </button>
        <button onClick={() => this.handleClick("-")} value="-">
          -
        </button>
        <button onClick={() => this.handleClick("÷")} value="÷">
          ÷
        </button>
        <button onClick={() => this.handleClick("=")} value="=">
          =
        </button>
        <button onClick={() => this.handleClick("x")} value="x">
          x
        </button>
        <button onClick={() => this.handleClick("%")} value="%">
          %
        </button>
        <button onClick={() => this.handleClick(".")} value=".">
          .
        </button>
        <button  onClick={() => this.handleClick("AC")} value="AC">
          AC
        </button>
        <button onClick={() => this.handleClick("+")} value="+">
          +/-
        </button>
      </section>
    );
  }
}

export default Calculator;
