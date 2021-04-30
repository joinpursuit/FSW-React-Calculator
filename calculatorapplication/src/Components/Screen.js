import React from "react";

class Screen extends React.Component {
  render() {
    const {result} =this.props
    return (
      <div className="Screen">
        <p className="inner-screen">{result}</p>
      </div>
    );
  }
}

export default Screen;
