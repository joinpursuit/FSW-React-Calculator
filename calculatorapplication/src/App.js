import React from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";

class App extends React.Component {
  state = { result: [{number : 0}, {positive: true }], history: [], showResult: [{value: ""}, {show: true}] };

  detectClick = (name) => {
    if(name === "-/+"){
      
      this.setState({result: preState.result.positive? preState.result.number: -preState.result.number })

    }else{

      this.setState({ result: name });
    }
  };

  calculate = () => {
    console.log("calculate");
  };

  clear = () => {
    this.setState({result:0})
  };

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Screen result={result} />
        <Buttons detectClick={this.detectClick} />
      </div>
    );
  }
}

export default App;
