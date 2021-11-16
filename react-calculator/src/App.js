import './App.css';
import {Component} from "react";
import KeyPad from './components/KeyPad';

class App extends Component {
  constructor(){
    super();
    this.state = {
      result: "0",
      num1: "",
      num2: "",
      operation:"",
      isOperator: false,
      display: "",
      history: ""
    }
  }

  handleButtons = (btn) => {

    if(btn.type === "operation") {
      this.setState({
        operation: btn.value,
        isOperator: true,
      })
      switch(this.state.operation) {
        case "clear": 
          console.log("clear");
          break;
        case "inverse":
          console.log("inverse");         
          break;
        case "percent": 
          console.log("percent");
          break;
        case "divide":
          console.log("divide");
          break;
        case "multiply":
          console.log("multiply");
          break;
        case "subtract":
          console.log("subtract");
          break;
        case "decimal":
          console.log("decimal");
          break;
        case "radical":
          console.log("radical");
          break;
        case "equal":
          console.log("equal")
          break;
      }
    }
    else if(btn.type==="number"){
      this.setState({
        isOperator:false,
        num1: this.state.num1 + btn.display,
        display: this.state.num1 + btn.display
      })
    }
  }

  render(){
    return (
      <main className="App">
        <div className="wrapper">
          <div id="display-screen">
            <div id="previous-screen"> 
              {this.state.history}
            </div>
          { this.state.display}
          </div>
          <div id="calculator-container">
          <KeyPad handleButtons={this.handleButtons}/>
          </div>
          8.2 calculator
      </div>
      </main>
    );
  }
}

export default App;
