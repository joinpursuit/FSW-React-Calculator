import { Component } from "react";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nums = this.props.handleNums;
    const mods = this.props.handleMods;
    const ops = this.props.handleOPs;
    const handleEqual = this.props.handleEqual;
    const { display, wait, previous } = this.props.info;
    return (
      <div id="container">
        <div id="numbers-view">{wait ? previous : display}</div>

        <button
          id="AC-button"
          value="reset"
          onClick={(event) => mods(event.target.value)}
        >
          AC
        </button>

        <button
          id="rev-button"
          value="reverse"
          onClick={(event) => mods(event.target.value)}
        >
          &#8723;
        </button>

        <button
          id="percent-button"
          value="percent"
          onClick={(event) => mods(event.target.value)}
        >
          %
        </button>

        <button
          id="divide-button"
          className="orange"
          value="/"
          onClick={(event) => ops(event.target.value)}
        >
          &#247;
        </button>

        <button
          id="seven-button"
          value="7"
          onClick={(event) => nums(event.target.value)}
        >
          7
        </button>

        <button
          id="eight-button"
          value="8"
          onClick={(event) => nums(event.target.value)}
        >
          8
        </button>

        <button
          id="nine-button"
          value="9"
          onClick={(event) => nums(event.target.value)}
        >
          9
        </button>

        <button
          id="multi-button"
          className="orange"
          value="*"
          onClick={(event) => ops(event.target.value)}
        >
          &#215;
        </button>

        <button
          id="four-button"
          value="4"
          onClick={(event) => nums(event.target.value)}
        >
          4
        </button>

        <button
          id="five-button"
          value="5"
          onClick={(event) => nums(event.target.value)}
        >
          5
        </button>

        <button
          id="six-button"
          value="6"
          onClick={(event) => nums(event.target.value)}
        >
          6
        </button>

        <button
          id="sub-button"
          className="orange"
          value="-"
          onClick={(event) => ops(event.target.value)}
        >
          -
        </button>

        <button
          id="one-button"
          value="1"
          onClick={(event) => nums(event.target.value)}
        >
          1
        </button>

        <button
          id="two-button"
          value="2"
          onClick={(event) => nums(event.target.value)}
        >
          2
        </button>

        <button
          id="three-button"
          value="3"
          onClick={(event) => nums(event.target.value)}
        >
          3
        </button>

        <button
          id="plus-button"
          className="orange"
          value="+"
          onClick={(event) => ops(event.target.value)}
        >
          +
        </button>

        <button
          id="zero-button"
          value="0"
          onClick={(event) => nums(event.target.value)}
        >
          0
        </button>

        <button
          id="period-button"
          value="."
          onClick={(event) => mods(event.target.value)}
        >
          .
        </button>

        <button
          id="equal-button"
          className="orange"
          value="."
          onClick={(event) => handleEqual()}
        >
          =
        </button>
      </div>
    );
  }
}
