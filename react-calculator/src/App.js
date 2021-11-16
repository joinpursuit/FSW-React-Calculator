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
    }
  }

  handleButtons = (num) => {
    console.log(num)
  }

  handleInput = () => {
    this.setState({
    })
  }
  render(){

    return (
      <main className="App">
        <div className="wrapper">
          <div id="display-screen">
          {this.state.result}
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
