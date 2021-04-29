import React from "react";
import NumberButtons from "./NumberButtons";
import OperatorButtons from "./OperatorButtons";
import Display from "./Display";
import "./Calculator.css";

class Calculator extends React.Component {
  state = { numbers: [], isPositive: true };

  addNums = (newNum) => {
    if (this.state.numbers.length < 8) {
      this.setState((prevState) => ({
        numbers: [...prevState.numbers, newNum],
      }));
    }
  };

  getNum = () => {
    let num = this.state.numbers.join("");
    return num;
  };

  changeNumPosOrNeg = () => {
    this.setState((prevState) => ({ isPositive: !prevState.isPositive }));
  };

  render() {
    const showNums = this.getNum();

    return (
      <section className="calculator">
        <NumberButtons addNums={this.addNums} />
        <OperatorButtons
          showNums={showNums}
          posOrNeg={this.changeNumPosOrNeg}
        />
        <Display showNums={showNums} isPositive={this.state.isPositive} />
      </section>
    );
  }
}

export default Calculator;
