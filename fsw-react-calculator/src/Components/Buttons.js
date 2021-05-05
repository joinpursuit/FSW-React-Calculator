import { Component } from "react";
class Buttons extends Component {
  render() {
    const { displayString, enterNum, addNums, posNegButton,equals} = this.props;
    // const displayString = Number(display.join("").toString()).toLocaleString();
  
    return (
      <div>
        <h2>{displayString}</h2>

        <button onClick={() => enterNum("1")} value={"1"}>
          1
        </button>
        <button onClick={() => enterNum("2")} value={"2"}>
          2
        </button>
        <button onClick={() => enterNum("3")} value={"3"}>
          3
        </button>
        <button onClick={() => enterNum("4")} value={"4"}>
          4
        </button>
        <button onClick={() => enterNum("5")} value={"5"}>
          5
        </button>
        <button onClick={() => enterNum("6")} value={"6"}>
          6
        </button>
        <button onClick={() => enterNum("7")} value={"7"}>
          7
        </button>
        <button onClick={() => enterNum("8")} value={"8"}>
          8
        </button>
        <button onClick={() => enterNum("9")} value={"9"}>
          9
        </button>
        <button onClick={() => enterNum("0")} value={"0"}>
          0
        </button>

        <button onClick={() => addNums("addition")} value={"addition"}>&#43;</button>
        <button>&minus;</button>
        <button>&times;</button>
        <button>&divide;</button>
        <button onClick={() => equals()} value={"equals"}>&#61;</button>
        <button
          onClick={() => posNegButton({ displayString })}
          value={displayString}
        >
          &#177;
        </button>
        <button>AC</button>
      </div>
    );
  }
}

export default Buttons;
