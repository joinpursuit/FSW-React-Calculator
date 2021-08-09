import React, { Component } from "react";

class ResultDisplay extends Component {
  render() {
    const { result } = this.props;
    // return <div id="result" className="row">{result}</div>;
    return <div id="result" className="row">{Number(result).toLocaleString()}</div>;
  }
}

export default ResultDisplay;
