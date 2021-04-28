import React from "react";

class Solution extends React.Component {
  
  
  render() {
    const { result } = this.props
    return <p className="result">{result}</p>;
  }
}

export default Solution;
