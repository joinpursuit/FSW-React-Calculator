import React, { Component } from "react";
import buttonData from "../Data/buttonData";
// import numberData from "../Data/numberData";
// import Numbers from "./Numbers";

export default class Buttons extends Component {
  state = { value: "", operator: "", elementOne: 0, elementTwo:0, function: "", runningTotal: 0 };
  // button = this.props;

  handleNumber = (e) => {
    this.setState((prevState) => ({value: prevState.value += e.target.value}));
  }
  // ** this takes the value and makes it a number!! this.setState((prevState) => ({value: prevState.value += Number(e.target.value)}))
  
  handleOperator = (e) => {
    if(this.state.elementOne === 0) {
      this.setState((prevState) => ({operator: prevState.operator = e.target.innerHTML}));
      this.setState((prevState) => ({elementOne: prevState.elementOne += Number(this.state.value)}))
      this.setState({value: ""});
    } else {
      this.setState((prevState) => ({function: prevState.function += this.state.operator}));
      this.setState((prevState) => ({operator: prevState.operator = e.target.innerHTML}));
      this.setState((prevState) => ({elementTwo: prevState.elementTwo += Number(this.state.value)}));
      this.handleFunction();
    } 
  }

  handleFunction = () => {
    if(this.state.function === "+") {

    }
  }
  

  // **clearing out operator & value =>  this.setState({operator: ""}); this.setState({value: ""});
  
  
  render() {
    console.log(this.state)

    return (
      <section>
        <button onClick={this.handleNumber} name="one" value={1}>1</button>
        <button onClick={this.handleNumber} name="two" value={2}>2</button>
        <button onClick={this.handleNumber} name="three" value={3}>3</button>
        <button onClick={this.handleNumber} name="four" value={4}>4</button>
        <button onClick={this.handleNumber} name="five" value={5}>5</button>
        <button onClick={this.handleNumber} name="six" value={6}>6</button>
        <button onClick={this.handleNumber} name="seven" value={7}>7</button>
        <button onClick={this.handleNumber} name="eight" value={8}>8</button>
        <button onClick={this.handleNumber} name="nine" value={9}>9</button>
        <button onClick={this.handleNumber} name="zero" value={0}>0</button>
        <button name="clear">C</button>
        <button name="decmile">.</button>
        <button onClick={this.handleOperator} name="plus" value="&plus;">+</button>
        <button onClick={this.handleOperator} name="subtract" value="&minus;">&minus;</button>
        <button onClick={this.handleOperator} name="multiply" value="&times;">&times;</button>
        <button onClick={this.handleOperator} name="divide" value="&divide;">&divide;</button>
        <button onClick={this.handleOperator} name="equal" value="=">=</button>
        <button name="backspace">backspace arrow</button>
      </section>
    )
  }
}

// const Number = ({ num }) => {
//   // const { character } = numValues;
//   console.log({ num });
//   return (
//   );
// };

// export default Number;
