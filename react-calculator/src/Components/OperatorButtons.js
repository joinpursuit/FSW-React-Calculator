import React from "react";
import "./Calculator.css";

class OperatorButtons extends React.Component {
  handleOperators = () => {
    const { posOrNeg, showNums } = this.props;
    posOrNeg(showNums);
  };

  render() {
    return (
      <section className="operatorButtons">
        <button
          type="button"
          name="+"
          value={"+"}
          onClick={this.handleOperators}
        >
          +
        </button>
        <button
          type="button"
          name="-"
          value={"-"}
          onClick={this.handleOperators}
        >
          -
        </button>
        <button
          type="button"
          name="*"
          value={"*"}
          onClick={this.handleOperators}
        >
          *
        </button>
        <button
          type="button"
          name="/"
          value={"/"}
          onClick={this.handleOperators}
        >
          /
        </button>
        <button
          type="button"
          name="AC"
          value={"AC"}
          onClick={this.handleOperators}
        >
          AC
        </button>
        <button
          type="button"
          name="+/-"
          value={"+/-"}
          onClick={this.handleOperators}
        >
          +/-
        </button>
        {/* <button type="button" name="+/-" value={"+/-"} onClick = {()=>posOrNeg(showNums)}>+/-</button> */}
        <button
          id="buttonEqual"
          type="button"
          name="="
          value={"="}
          onClick={this.handleOperators}
        >
          =
        </button>
      </section>
    );
  }
}

export default OperatorButtons;
