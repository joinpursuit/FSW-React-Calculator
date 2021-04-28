import React from "react";
import "./App.css";
import KeyPad from "./Components/KeyPad";

class App extends React.Component {
  state = {result: ""}

  handleNum = (button) => {
    this.setState({ result: this.state.result + button });
  }

  // handleOperator = () => {
    
  // }


  render() {
    const {result} = this.state
    return (
      <div className="App">
        <KeyPad handleNum={this.handleNum} result={result}/>
      </div>
    );
  }
}

export default App;
