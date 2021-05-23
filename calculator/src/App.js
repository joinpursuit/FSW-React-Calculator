import { Component } from "react";
import "./App.css";
import Buttons from "./Components/Buttons";
import Input from "./Components/Input";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", operator: "", previousNumber: "", currentNumber: "" };
  }


 

  handleInput = (value) => {
    
    this.setState({ input: this.state.input + value});
  };

   handleZero = (value) => {
     if (this.state.input !== "") {
       this.setState({ input: this.state.input + value})
     }
   }

  

   handleOp = (e) => {
     const { operator } = this.state;
     this.setState({
       operator: e.target.value, 
     })
   }


   handleEqual = () => {
    try {
      const result = eval(this.state.input);
      this.state({input: result});
    }catch (err) {
      this.setState({input: ""})
    }
   }

   handleClear = () => {
     this.setState({input: "0"})
   }
   


  render() {
    return (
      <div className="App">
        <div className="calculator-container">
          <Input input={this.state.input} />
          <div className="row">
            <Buttons handleInput={this.handleInput} handleEqual={this.handleEqual} input={this.state.input} operator={this.handleOp} handleClear={this.handleClear}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
