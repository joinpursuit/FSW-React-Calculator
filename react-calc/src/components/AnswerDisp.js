import React from "react";
import { Component } from "react";

class AnswerDisp extends Component {
  render() {
    let { outcome } = this.props;
    return (
      <div className="outcome">
        <p>{outcome}</p>
      </div>
    );
  }
}

export default AnswerDisp;
