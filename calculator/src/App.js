import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = { result: "" }
  }

  onClick = (symbol) => {
    if(symbol === "="){
      this.calculate()
    } else if(symbol === "AC"){
      this.reset()
    } else {
      this.setState({ result: this.state.result + symbol })
    }
  }

  calculate = () => {
    let resultCheck = ''
    if(this.state.result.includes('--')){
        resultCheck = this.state.result.replace('--','+')
    }
    else {
        resultCheck = this.state.result
    }
    try {
        this.setState({
            // eslint-disable-next-line
            result: (eval(resultCheck) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
};

reset = () => {
    this.setState({
        result: ""
    })
};

  render() {
    return (
      <div className="body">
        <Result result={this.state.result}/>
        <Button onClick={this.onClick}/>
      </div>
    )
  }
}

export default App;
