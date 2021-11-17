import {Component} from "react";
import './App.css';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      calculatedValue: 0,
      operator:"",
      inputs: "",
    }
  }

  handleButtonClick=(e)=>{
    this.setState({
      inputs: this.state.inputs + e.target.value
    })
  }

  handleOperatorClick=(e)=>{
    this.setState({

      calculatedValue:Number(this.state.inputs),
      inputs:"",
      operator: e.target.value
    })
  }
  handleClearClick=()=>{
    this.setState({
      inputs:""
    })
  }
  handleDecimalClick=()=>{
    this.setState({
      inputs: this.state.inputs / 100
    })
  }
  handleResultsClick=(e)=>{
    if(this.state.operator === "+"){
      this.setState({
        inputs: this.state.calculatedValue + Number(this.state.inputs)
      })
    } else if(this.state.operator === "-"){
      this.setState({
        inputs: this.state.calculatedValue - Number(this.state.inputs)
      })
    } else if(this.state.operator === "%"){
      this.setState({
        inputs: this.state.calculatedValue / 100 

      })
    } else if(this.state.operator === "/"){
      this.setState({
        inputs: this.state.calculatedValue / Number(this.state.inputs)
      })
    } else if(this.state.operator === "x"){
      this.setState({
        inputs: this.state.calculatedValue * Number(this.state.inputs)
      })
    } 

  }

  render(){
    return(
      <div id="app-container">
          <input id="input" value={this.state.inputs}/>
          <button id="clear"className="clearButton"value="AC"onClick={this.handleClearClick}>{"AC"}</button>
          <button className="clearButton"value="+/-" onClick={this.handleOperatorClick}>{"+/-"}-</button>
          <button className="clearButton" value="%" onClick={this.handleDecimalClick}>{"%"}</button>
          <button className="operator" value="/"onClick={this.handleOperatorClick}>{"/"}</button>
          <button value="7" onClick={this.handleButtonClick}>{"7"}</button>
          <button value="8" onClick={this.handleButtonClick}>{"8"}</button>
          <button value="9" onClick={this.handleButtonClick}>{"9"}</button>
          <button className="operator" value="x"  onClick={this.handleOperatorClick}>{"x"}</button>
          <button value="4"  onClick={this.handleButtonClick}>{"4"}</button>
          <button value="5" onClick={this.handleButtonClick}>{"5"}</button>
          <button value="6" onClick={this.handleButtonClick}>{"6"}</button>
          <button className="operator" value="-" onClick={this.handleOperatorClick}>{"-"}</button>
          <button value="1" onClick={this.handleButtonClick}>{"1"}</button>
          <button value="2" onClick={this.handleButtonClick}>{"2"}</button>
          <button value="3" onClick={this.handleButtonClick}>{"3"}</button>
          <button className="operator" value="+" onClick={this.handleOperatorClick}>{"+"}</button>
          <button value="0" onClick={this.handleButtonClick} id="zero">{"0"}</button>
          <button value="." onClick={this.handleButtonClick}>{"."}</button>
          <button className="equal" value="=" onClick={this.handleResultsClick}>{"="}</button>                   
        </div>
        
    )
  }
}

export default App;
