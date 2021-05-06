import React from "react";
import "./Calculator.css";

class Display extends React.Component {
  handleDisplay = () => {
    const { showNums, isPositive, result, numbers } = this.props;
    if (result === "") {
      // if (numbers.length === 0 || Number(showNums) === 0) {
      //   return 0;
      // } else {
        return showNums.toLocaleString();
      // }
    } else {
      return Number(result).toLocaleString();
    }
  };
  render() {
    return (
      <section className="display">
        <span>{this.handleDisplay()}</span>
      </section>
    );
  }
}
export default Display;
