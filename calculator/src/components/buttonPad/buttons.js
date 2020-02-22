import React from "react";

class ButtonPad extends React.Component {
  state = {
    displayValue: "",
    prevValue: "",
    operation: {}
  };

  render() {
    return (
      <div className="buttons">
        <div>
          <button type="submit" value="0">
            0
          </button>
        </div>
        <div>
          <button type="submit" value="1">
            1
          </button>
        </div>
        <div>
          <button type="submit" value="2">
            2
          </button>
        </div>
        <div>
          <button type="submit" value="3">
            3
          </button>
        </div>
        <div>
          <button type="submit" value="4">
            4
          </button>
        </div>
        <div>
          <button type="submit" value="5">
            5
          </button>
        </div>
        <div>
          <button type="submit" value="6">
            6
          </button>
        </div>
        <div>
          <button type="submit" value="7">
            7
          </button>
        </div>
        <div>
          <button type="submit" value="8">
            8
          </button>
        </div>
        <div>
          <button type="submit" value="9">
            9
          </button>
        </div>
      </div>
    );
  }
}
export default ButtonPad;
