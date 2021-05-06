import React from "react";
import "./App.css";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";
const numbers = "0123456789";

class App extends React.Component {
  state = {
    currentInput: "0",
    history: [],
    // showcurrentInput: [{ value: "" }, { show: true }],
  };

  detectClick = (target) => {
    // debugger;
    const { currentInput } = this.state;
    if (
      numbers.includes(target.name) &&
      currentInput.length > 0 &&
      currentInput !== "0"
    ) {
      if (currentInput.length > 3 && currentInput.includes(".")) {
      }
      this.setState((prevState) => {
        return {
          currentInput: prevState.currentInput + target.name,
        };
      });
    } else if (numbers.includes(target.name)) {
      this.setState({ currentInput: target.name });
    }

    if (target.name === "-/+") {
      this.changePositivity();
    } else {
      console.log("nothing");
    }
  };

  changePositivity = () => {
    const { currentInput } = this.state;
    if( !currentInput.includes("-")){
      this.setState({currentInput: "-"+currentInput})
    }else{
      this.setState({currentInput: currentInput.filter("-")})
    }

  };
  operation = (target) => {
    const { currentInput } = this.state;
    let result = 0;
    switch (target.name) {
      case "+":
        result =
          currentInput + target.name
        break;
      case "-":
        result =
          currentInput + target.name
        break;
      case "*":
        result =
          currentInput + target.name
        break;
      case "/":
        result =
          currentInput + target.name
        break;
      default:
        break;
    }
    this.setState({ currentInput: result });
  };

  clear = (e) => {
    this.setState({ currentInput: "0" });
  };
  calculate = ()=>{
    console.log("calculate")
  }

  render() {
    const { currentInput } = this.state;
    return (
      <div className="App">
        <Screen currentInput={currentInput} />
        <Buttons
          detectClick={this.detectClick}
          clear={this.clear}
          operation={this.operation}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

export default App;
