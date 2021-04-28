import React from "react";
import "./App.css";
import KeyPad from "./Components/KeyPad";

class App extends React.Component {
  state = {result: 0}

 

  render() {
    const {result} = this.state
    return (
      <div className="App">
        <KeyPad result={result}/>
      </div>
    );
  }
}

export default App;
