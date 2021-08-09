import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    // ({ result } === "" ? 0 : { result });
    //ternary formula     condition ? exprIfTrue : exprIfFalse

    return (
      <div className="result">
        <p>{result === "" ? "0" : Number(result).toLocaleString()}</p>
      </div>
    );
  }
}

export default ResultComponent;
