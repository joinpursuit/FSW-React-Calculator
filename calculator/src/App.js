import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from "./Components/Buttons"
import Input from './Components/Input';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {value: '0'}
  }

  // handleInput = (input) => {
  //   const {value, operator} = this.state;

  //     switch(input) {
  //       case '0':
  //       case '1':
  //       case '2':
  //       case '3':
  //       case '4':
  //       case '5':
  //       case '6':
  //       case '7':
  //       case '8':
  //       case '9':
  //         this.setState({
  //           value: (value === '0') ? input : value + input
  //         })
  //         break;
  //       case '+':
  //       case '-':
  //       case 'x':
  //       case '÷':
  //         this.setState({
  //           operator:input,
  //           value: (operator !==null) ? value.substr(0, value.length -1): value+ input 
  //         })
  //         break;
  //       case '.':
  //         this.setState({
  //           value:value +input
  //         })
  //     }
  // }
  handleInput = () => {
    const value = this.state;

  }
  render() {
  return (
    <div className="App">
      <div className="calculator-container">
        <Input input={this.state.value}/>
        <div className="row">
          <Buttons handleClick={this.handleInput}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
