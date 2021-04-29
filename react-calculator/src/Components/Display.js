import React from "react";
import "./Calculator.css";

class Display extends React.Component {
  render() {
    const { showNums, isPositive } = this.props;
    return (
      <section className="display">
        <span>
          {isPositive
            ? Number(showNums).toLocaleString()
            : "-" + Number(showNums).toLocaleString()}{" "}
        </span>
      </section>
    );
  }
}
export default Display;
