import React from "react";
import Digits from "./Digits";

function Keypad() {
//   onClick = (button) => {
//     if (button === "=") {
//       this.calculate();
//     } else if (button === "C") {
//       this.reset();
//     } else if (button === "") {
//       this.backspace();
//     } else {
//       this.setState({
//         result: this.state.result + button,
//       });
//     }
//   };

  return (
    <div>
      <Digits />
    </div>
  );
}

export default Keypad;
