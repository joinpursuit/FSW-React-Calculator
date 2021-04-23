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
    // equal:
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
        input: [prevState.input, ...[event]].join(""),
        secondDisplay: [prevState.input, ...[event]].join(""),
      }));
    } else {
      this.setState((prevState) => ({
        input: [...prevState.input, ...[event]].join(""),
        firstDisplay: [...prevState.input, ...[event]].join(""),
      }));
    }
    console.log(this.state);
  };

  handleMod = (event) => {

    
    if(event === "plusMinus"){
        this.setState((prevState) => ({
          input: Number(prevState.input) * -1,
          firstDisplay: Number(prevState.input) * -1,
         mod: event,
          previous: prevState, // no real functionality just wanted to call prevState so it wouldnt stay faded
        }));    
console.log(this.state)
    }else{

        this.setState((prevState) => ({
          input: "",
          // firstDisplay: [...[answer]].join(""),
         mod: event,
          previous: prevState, // no real functionality just wanted to call prevState so it wouldnt stay faded
        }));
    }

      }
 
    

 

   

  handleEqual = (event) => {
    console.log(event);
    // if(event.second){
    if (event.mod === "sum") {
      let answer = Number(event.first) + Number(event.second);
      this.setState((prevState) => ({
        //mimicked first conditional of handleGrid in order for state to make answer first display which resets state each time and allows for cumulative functionality
        input: [...[answer]].join(""),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod:""
      }));
    }
    if (event.mod === "subtract") {
      let answer = Number(event.first) - Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(""),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod:""
      }));
    }
    if (event.mod === "divide") {
      let answer = Number(event.first) / Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(""),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod:""
      }));
    }
    if (event.mod === "multiply") {
      let answer = Number(event.first) * Number(event.second);
      this.setState((prevState) => ({
        input: [...[answer]].join(""),
        firstDisplay: [...[answer]].join(""),
        previous: prevState,
        mod:""
      }));
    }
  // }else{
  //   let answer = Number(event.first);
  //   this.setState((prevState) => ({
  //     input: [...[answer]].join(""),
  //     firstDisplay: [...[answer]].join(""),
  //     previous: prevState,
  //   }));
  }
    
  
  
  
  // if (event.mod === "plusMinus" && event.second === "") {
  //     let answer = event.first 
  //     this.setState((prevState) => ({
  //       input: [...[answer]].join(""),
  //       firstDisplay: [...[answer]].join(""),
  //       previous: prevState,
  //     }));
  //   } else{
  //   let answer = Number(event.first);
  //   this.setState((prevState) => ({
  //     input: [...[answer]].join(""),
  //     firstDisplay: [...[answer]].join(""),
  //     previous: prevState,
  //   }));

  // }



  

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
        <Equal //will loop values of state properties by making a copy of them in child component and passing in as arguments back to parent function
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
