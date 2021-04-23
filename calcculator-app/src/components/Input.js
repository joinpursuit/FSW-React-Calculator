import React from "react";
import Grid from "./Grid.js";
import Mod from "./Mod.js";
import Equal from "./Equal.js";
import "./styles/Input.css";

class Input extends React.Component {
  state = {
    input: [],
    firstDisplay: [],
    mod: "",
    secondDisplay: [],
    answer: 0,
  };

  handleInputChange = (event) => {
    //let display = event.target.value.split("");
    if (this.state.mod) {
      const { name, value } = event.target; //this makes the state update with each change. Not quite sure why. It was part of forms lesson. I think its deconstructing in some way.
      this.setState({ [name]: value }); // this is part of that^^
      console.log(this.state);
      this.setState((prevState) => ({
        secondDisplay: [...prevState.input],
      }));
      console.log(this.state);
      //debugger;
    } else {
      const { name, value } = event.target; //this makes the state update with each change. Not quite sure why. It was part of forms lesson. I think its deconstructing in some way.
      this.setState({ [name]: value }); // this is part of that^^
      console.log(this.state);
      this.setState((prevState) => ({
        firstDisplay: [...prevState.input],
      }));
    }
  };

  handleGrid = (event) => {
    if (this.state.mod) {
      this.setState((prevState) => ({
        input: [...prevState.input,...[event]].join(''),
        secondDisplay: [...prevState.input,...[event]].join(''),
      }));
    } else {
      this.setState((prevState) => ({
        input: [...prevState.input,...[event]].join(''),
        firstDisplay: [...prevState.input,...[event]].join(''),
      }));
    }
    console.log(this.state);
    
  };

  handleMod = (event) => {
    console.log(event);
    this.setState((prevState) => ({
      input: "",
      mod: event,
      previous: prevState,
    }));
   
  };

  handleEqual = (event) => {
    console.log(event);
    if (event.mod === "sum") {
      let answer = Number(event.first) + Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(''),
        firstDisplay: [...[answer]].join(''),
        previous: prevState,
      }));
    }
    if (event.mod === "subtract") {
      let answer = Number(event.first) - Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(''),
        firstDisplay: [...[answer]].join(''),
        previous: prevState,
      }));
    }
    if (event.mod === "divide") {
      let answer = Number(event.first) / Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(''),
        firstDisplay: [...[answer]].join(''),
        previous: prevState,
      }));
    }
    if (event.mod === "multiply") {
      let answer = Number(event.first) * Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(''),
        firstDisplay: [...[answer]].join(''),
        previous: prevState,
      }));
    }
    if (event.mod === "plusMinus") {
      let answer = Number(event.first) * Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(''),
        firstDisplay: [...[answer]].join(''),
        previous: prevState,
      }));
    }

  };

  render() {
    return (
      <div className="main-container">
        <input
          className="calc-input"
          onChange={this.handleInputChange}
          id="Number"
          name="input"
          value={this.state.input}
        />
        <button onClick={this.test}></button>
        <Grid handleGrid={this.handleGrid} />
        <Mod handleMod={this.handleMod} />
        <Equal
          first={this.state.firstDisplay}
          mod={this.state.mod}
          second={this.state.secondDisplay}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

export default Input;
