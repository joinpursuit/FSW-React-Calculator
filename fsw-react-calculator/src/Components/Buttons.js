import React from 'react'


// const Buttons  = ({displayString, enterNum, addition, subtraction, multiplication, division, posNegButton, equals, clear}) => {
function Buttons (props) {
  
 
    // const {
    //   displayString,
    //   enterNum,
    //   addition,
    //   subtraction,
    //   multiplication,
    //   division,
    //   posNegButton,
    //   equals,
    //   clear,
    // } = props;

    const displayString2 = props.displayString


    return (
      <div className="button-container">

        <h1 className="display">{props.displayString}</h1>

        <button
          className="one-button"
          onClick={() => props.enterNum("1")}
          value={"1"}
        >
          1
        </button>
        <button
          className="two-button"
          onClick={() => props.enterNum("2")}
          value={"2"}
        >
          2
        </button>
        <button
          className="three-button"
          onClick={() => props.enterNum("3")}
          value={"3"}
        >
          3
        </button>
        <button
          className="four-button"
          onClick={() => props.enterNum("4")}
          value={"4"}
        >
          4
        </button>
        <button
          className="five-button"
          onClick={() => props.enterNum("5")}
          value={"5"}
        >
          5
        </button>
        <button
          className="six-button"
          onClick={() => props.enterNum("6")}
          value={"6"}
        >
          6
        </button>
        <button
          className="seven-button"
          onClick={() => props.enterNum("7")}
          value={"7"}
        >
          7
        </button>
        <button
          className="eight-button"
          onClick={() => props.enterNum("8")}
          value={"8"}
        >
          8
        </button>
        <button
          className="nine-button"
          onClick={() => props.enterNum("9")}
          value={"9"}
        >
          9
        </button>
        <button
          className="zero-button"
          onClick={() => props.enterNum("0")}
          value={"0"}
        >
          0
        </button>

        <button
          className="add-button"
          onClick={() => props.addition("addition")}
          value={"addition"}
        >
          &#43;
        </button>
        <button
          className="subtract-button"
          onClick={() => props.subtraction("subtraction")}
          value={"subtraction"}
        >
          &minus;
        </button>
        <button
          className="multiply-button"
          onClick={() => props.multiplication("multiplication")}
          value={"multiplication"}
        >
          &times;
        </button>
        <button
          className="divide-button"
          onClick={() => props.division("division")}
          value={"division"}
        >
          &divide;
        </button>
        <button
          className="equals-button"
          onClick={() => props.equals()}
          value={"equals"}
        >
          &#61;
        </button>
        <button
          className="pos-neg-button"
          onClick={() => props.posNegButton(displayString2)}
          value={displayString2}
        >
          &#177;
        </button>
        <button className="AC-button" onClick={() => props.clear()}>
          AC
        </button>
      </div>
    );
  
}

export default Buttons;
