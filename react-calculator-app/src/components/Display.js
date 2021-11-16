import React from "react";

class Display extends ({ Component }) {
  constructor() {
    super();
    this.state = {
      displayResult: 0,
    };
  }
  
  handleChangeResult = () => {
    
  }

  render() {
    return (
      <div id="calc-display">
        <section>{this.state.result}</section>
      </div>
    );
  }
}

export default Display;
