import React, { Component } from "react";
// import buttonData from "../Data/buttonData";
// import numberData from "../Data/numberData";
// import Numbers from "./Numbers";

export default class Buttons extends Component {
  state = {
    value: "0",
    operator: "",
    elementOne: 0,
    elementTwo: 0,
    function: "",
    runningTotal: 0,
  };
  // button = this.props;

  handleNumber = (e) => {
    const { value } = this.state;
    if (value === "0") {
      this.setState({ value: e.target.value });
    } else {
      this.setState((prevState) => ({
        value: prevState.value + e.target.value,
      }));
    }
    // debugger
    // this.setState({function: ""})
  };
  // ** this takes the value and makes it a number!! this.setState((prevState) => ({value: prevState.value += Number(e.target.value)}))

  handleOperator = (e) => {
    if (this.state.elementOne === 0) {
      this.setState((prevState) => ({
        operator: e.target.value,
        elementOne: Number(prevState.value),
        value: "",
      }));
    } else {
      const { operator } = this.state;
      if (operator === "+") {
        this.setState((prevState) => ({
          elementOne: prevState.elementOne + Number(prevState.value),
          operator: e.target.value,
          value: "",
        }));
      } else if (operator === "−") {
        this.setState((prevState) => ({
          elementOne: prevState.elementOne - Number(prevState.value),
          operator: e.target.value,
          value: "",
        }));
      } else if (operator === "×") {
        this.setState((prevState) => ({
          elementOne: prevState.elementOne * Number(prevState.value),
          operator: e.target.value,
          value: "",
        }));
      } else if (operator === "÷") {
        this.setState((prevState) => ({
          elementOne: prevState.elementOne / Number(prevState.value),
          operator: e.target.value,
          value: "",
        }));
      } 
    }
  };

  handleClear = () => {
    this.setState({
      value: "0",
      operator: "",
      elementOne: 0,
      elementTwo: 0,
      function: "",
      runningTotal: 0,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevState = ${prevState.operator}, prevElement = ${prevState.elementOne}`)
  }
  
  handleEqual = () => {
    this.componentDidUpdate();
  }


  // handleFunction = () => {
  //   if(this.state.function === "+") {
  //     this.setState((prevState) => ({runningTotal: prevState.runningTotal + prevState.elementOne + prevState.elementTwo }))
  //     // this.setState((prevState) => ({runningTotal: prevState.runningTotal + this.state.elementTwo}))
  //   }
  // }

  // **clearing out operator & value =>  this.setState({operator: ""}); this.setState({value: ""});

  render() {
    console.log(this.state);

    return (
      <section>
        <button onClick={this.handleNumber} name="one" value={1}>
          1
        </button>
        <button onClick={this.handleNumber} name="two" value={2}>
          2
        </button>
        <button onClick={this.handleNumber} name="three" value={3}>
          3
        </button>
        <button onClick={this.handleNumber} name="four" value={4}>
          4
        </button>
        <button onClick={this.handleNumber} name="five" value={5}>
          5
        </button>
        <button onClick={this.handleNumber} name="six" value={6}>
          6
        </button>
        <button onClick={this.handleNumber} name="seven" value={7}>
          7
        </button>
        <button onClick={this.handleNumber} name="eight" value={8}>
          8
        </button>
        <button onClick={this.handleNumber} name="nine" value={9}>
          9
        </button>
        <button onClick={this.handleNumber} name="zero" value={0}>
          0
        </button>
        <button onClick={this.handleClear} name="clear">
          C
        </button>
        <button name="decmile">.</button>
        <button name="posNeg" value="&plusmn;">
          &plusmn;
        </button>
        <button onClick={this.handleOperator} name="plus" value="+">
          +
        </button>
        <button onClick={this.handleOperator} name="subtract" value="&minus;">
          &minus;
        </button>
        <button onClick={this.handleOperator} name="multiply" value="&times;">
          &times;
        </button>
        <button onClick={this.handleOperator} name="divide" value="&divide;">
          &divide;
        </button>
        <button onClick={this.handleEqual} name="equal" value="=">
          =
        </button>
        <button name="backspace">backspace arrow</button>
      </section>
    );
  }
}

// const Number = ({ num }) => {
//   // const { character } = numValues;
//   console.log({ num });
//   return (
//   );
// };

// export default Number;
