import React from "react";

const Buttons = ({ display, handleClear }) => {
    return (
      <div>
        I am holding Buttons!
        <div className="Calculator">
          <div className="Display" value={display}>
            {display}
          </div>
          <button className="TopRow" onClick={() => handleClear()} value={0}>
            AC
          </button>
          <button className="TopRow">%</button>
          <button className="Blank"></button>
          <button className="Operator" onClick={this.handleDivisionSign}>
            ÷
          </button>
          <button className="SecondRow" onClick={this.enterNumber} value={7}>
            7
          </button>
          <button className="SecondRow" onClick={this.enterNumber} value={8}>
            8
          </button>
          <button className="SecondRow" onClick={this.enterNumber} value={9}>
            9
          </button>
          <button className="Operator" onClick={this.handleMultiplicationSign}>
            x
          </button>
          <button className="ThirdRow" onClick={this.enterNumber} value={4}>
            4
          </button>
          <button className="ThirdRow" onClick={this.enterNumber} value={5}>
            5
          </button>
          <button className="ThirdRow" onClick={this.enterNumber} value={6}>
            6
          </button>
          <button className="Operator" onClick={this.handleMinusSign}>
            -
          </button>
          <button className="FourthRow" onClick={this.enterNumber} value={1}>
            1
          </button>
          <button className="FourthRow" onClick={this.enterNumber} value={2}>
            2
          </button>
          <button className="FourthRow" onClick={this.enterNumber} value={3}>
            3
          </button>
          <button className="Operator" onClick={this.handlePlusSign}>
            +
          </button>
          <button className="BottomRow" onClick={this.enterNumber} value={0}>
            0
          </button>
          <button className="BottomRow">.</button>
          <button className="BottomRow" onClick={this.handleToggleInteger}>
            ±
          </button>
          <button className="Operator" onClick={this.handleEqualSign}>
            =
          </button>
        </div>
      </div>
    );
  }

export default Buttons;
