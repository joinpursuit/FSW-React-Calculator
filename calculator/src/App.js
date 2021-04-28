import React from "react";
import "./App.css";
import Keypad from "./Components/Keypad";
import KeypadIndex from "./Components//KeypadIndex";

class App extends React.Component {
  state = { result: '' };

  btnPressed = (button) => {
    if(button === "="){
      this.calculate();

    }else{
      this.setState({ result: this.state.result + button});
    }
  };

  calculate = () => {
    const {result} = this.state
    this.setState ({
      result: eval(result)
    })

  }
  clear = () => {
    this.setState ( { result: (this.state.result = '')})
  }
  render() {
    const {result} = this.state
    const btnPressed = this.btnPressed;
    const clear = this.clear
    return (
      <div className="App">
        <KeypadIndex  result={result}/>
        <Keypad btnPressed={btnPressed} clear={clear} />
      </div>
    );
  }
}

export default App;
