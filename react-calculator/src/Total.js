import React, { Component } from "react";

export default class Tot extends Component {
  render() {
    return (
      <div className="result">
          <p>{this.props.result}</p>
        {/* <p>{Number(this.props.result).toLocaleString()}</p> */}
      </div>
    );
  }
}
