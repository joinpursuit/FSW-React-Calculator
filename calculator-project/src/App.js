import { Component } from 'react';
import './App.css';
import Display from './components/Display'
import Keypad from './components/Keypad'

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      result: parseInt("0")
    }
  }
  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "+/-") {
        this.negative()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};

calculate = () => {
    let answer = ''
    if(this.state.result.includes('--')){
        answer = this.state.result.replace('--','+')
    }

    else {
        answer = this.state.result
    }

    try {
        this.setState({
            result: Math.floor(eval(answer) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: e
        })
    }
};

reset = () => {
    this.setState({
        result: parseInt("0") 
    })
};

negative = () => {
    this.setState({
        result: this.state.result * -1
    })
}

division = () => {
    this.setState({
        result: this.state.result
    })
}

  render() { 
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Display result={this.state.result}/>
      <Keypad onClick={this.onClick}/>
    </div>
  );
}
}
export default App;
