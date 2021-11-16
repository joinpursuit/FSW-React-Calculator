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
    // this.setState({ changeeee
    //   num1: this.state.num1 + btn.value,
    //   display: this.state.num1 + btn.value,
    // })
    if(btn.type === "operation") {
      this.setState({
        operation: btn.value
      })
      console.log(btn.value, btn.type)
    }
    else if(btn.type==="number"){
      console.log("number")
      console.log(btn.value, btn.type)
    }
  }

  handleHistoryDisplay = () => {
    this.setState({
      history: this.state.display
    })
  }
  
  handleOperations = () => {
    let input = this.state.num1
  }

  render(){

    return (
      <main className="App">
        <div className="wrapper">
          <div id="display-screen">
            <div id="previous-screen"> {this.state.history}</div>
          {this.state.display}
          </div>
          <div id="calculator-container">
          <KeyPad 
            handleButtons={this.handleButtons}
            handleDisplay={this.handleOperations}
            handleHistoryDisplay= {this.handleHistoryDisplay}

          />
          </div>
          8.2 calculator
      </div>
      </main>
    );
  }
}

export default App;
