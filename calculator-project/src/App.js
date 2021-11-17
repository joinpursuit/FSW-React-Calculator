import { Component } from "react";
import './App.css';

import Button from "./components/Button";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

class App extends Component {
    constructor() {
      super();
      this.state = { data: ""}
    }

    calculateData = () => {
      try {

        const result = eval(this.state.data);
        this.setState({ data: result });
      } catch (event) {
        this.setState({ data: "Error" })
        }
    }

    handleClick = (event) => {
        const value = event.target.getAttribute("data-value");
        switch(value) {
          case "clear":
          this.setState({ data: "" });
          break;
          case "equal":
          this.calculateData();
          break;
        default:
          this.setState({ data: this.state.data + value });
      }
  }
    render() {
      return (
        <div className="App">
          <div className="calc-container">
          <Display data={this.state.data} />
          <Keypad />

          <div className="row">
            
            <Button onClick={this.handleClick} symbol="7" value="7" />
            <Button onClick={this.handleClick} symbol="8" value="8" />
            <Button onClick={this.handleClick} symbol="9" value="9" />
            <Button onClick={this.handleClick} symbol="/" value="/" />
          </div>
          <div className="row">
            <Button onClick={this.handleClick} symbol="4" value="4" />
            <Button onClick={this.handleClick} symbol="5" value="5" />
            <Button onClick={this.handleClick} symbol="6" value="6" />
            <Button onClick={this.handleClick} symbol="x" value="*" />
          </div>
          <div className="row">
            <Button onClick={this.handleClick} symbol="1" value="1" />
            <Button onClick={this.handleClick} symbol="2" value="2" />
            <Button onClick={this.handleClick} symbol="3" value="3" />
            <Button onClick={this.handleClick} symbol="+" size="6" value="+" />
          </div>
          <div className="row">
            <Button onClick={this.handleClick} symbol="0" value="0" />
            <Button onClick={this.handleClick} symbol="." size="." value="." />
            <Button onClick={this.handleClick} symbol="=" size="6" value="equal" />
            <Button onClick={this.handleClick} symbol="-" value="-" />
          </div>
            <Button onClick={this.handleClick} symbol="CLEAR" value="clear" />
        </div>
      </div>
      );
    }
  }

export default App;
