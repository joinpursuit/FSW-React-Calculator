import { Component } from "react";
class Buttons extends Component {
  render() {
    const {
      displayString,
      enterNum,
      addition,
      subtraction,
      multiplication,
      division,
      posNegButton,
      equals,
      clear,
    } = this.props;
    // const displayString = Number(display.join("").toString()).toLocaleString();

    return (
      <div className="button-container">
          
        <h1 className="display">{displayString}</h1>

        <button
          className="one-button"
          onClick={() => enterNum("1")}
          value={"1"}
        >
          1
        </button>
        <button
          className="two-button"
          onClick={() => enterNum("2")}
          value={"2"}
        >
          2
        </button>
        <button
          className="three-button"
          onClick={() => enterNum("3")}
          value={"3"}
        >
          3
        </button>
        <button
          className="four-button"
          onClick={() => enterNum("4")}
          value={"4"}
        >
          4
        </button>
        <button
          className="five-button"
          onClick={() => enterNum("5")}
          value={"5"}
        >
          5
        </button>
        <button
          className="six-button"
          onClick={() => enterNum("6")}
          value={"6"}
        >
          6
        </button>
        <button
          className="seven-button"
          onClick={() => enterNum("7")}
          value={"7"}
        >
          7
        </button>
        <button
          className="eight-button"
          onClick={() => enterNum("8")}
          value={"8"}
        >
          8
        </button>
        <button
          className="nine-button"
          onClick={() => enterNum("9")}
          value={"9"}
        >
          9
        </button>
        <button
          className="zero-button"
          onClick={() => enterNum("0")}
          value={"0"}
        >
          0
        </button>

        <button
          className="add-button"
          onClick={() => addition("addition")}
          value={"addition"}
        >
          &#43;
        </button>
        <button
          className="subtract-button"
          onClick={() => subtraction("subtraction")}
          value={"subtraction"}
        >
          &minus;
        </button>
        <button
          className="multiply-button"
          onClick={() => multiplication("multiplication")}
          value={"multiplication"}
        >
          &times;
        </button>
        <button
          className="divide-button"
          onClick={() => division("division")}
          value={"division"}
        >
          &divide;
        </button>
        <button
          className="equals-button"
          onClick={() => equals()}
          value={"equals"}
        >
          &#61;
        </button>
        <button
          className="pos-neg-button"
          onClick={() => posNegButton({ displayString })}
          value={displayString}
        >
          &#177;
        </button>
        <button className="AC-button" onClick={() => clear()}>
          AC
        </button>
      </div>
    );
  }
}

export default Buttons;
