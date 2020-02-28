import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input'
import ClearButton from './components/ClearButton'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ""
    }
  }

  updateInput = (val) => {
    this.setState({ 
      input: this.state.input + val});
  }

  handleClear = () => {
    this.setState({
      input: ""
    })
  }

  // handleClick = (val) => {
  //   this.updateInput(val)
  // }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.updateInput}>7</Button>
            <Button handleClick={this.updateInput}>8</Button>
            <Button handleClick={this.updateInput}>9</Button>
            <Button handleClick={this.updateInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>4</Button>
            <Button handleClick={this.updateInput}>5</Button>
            <Button handleClick={this.updateInput}>6</Button>
            <Button handleClick={this.updateInput}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>1</Button>
            <Button handleClick={this.updateInput}>2</Button>
            <Button handleClick={this.updateInput}>3</Button>
            <Button handleClick={this.updateInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.updateInput}>.</Button>
            <Button handleClick={this.updateInput}>0</Button>
            <Button handleClick={this.updateInput}>=</Button>
            <Button handleClick={this.updateInput}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
