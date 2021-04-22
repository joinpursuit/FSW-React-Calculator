import React from "react";
// import Grid from "./Grid.js";
import Mod from "./Mod.js";
// import Equal from "./Equal.js";
import "./styles/Input.css";

class Input extends React.Component {
  state = { input: "", firstDisplay: "", mod: "", secondDisplay: [] };

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

  test = () => {
    console.log(this.state);
  };
  // .reverse().join(''), press: [newButton.type,...prevState.press]}))

  render() {
    return (
      <div>
        <input
          className="calc-input"
          onChange={this.handleInputChange}
          id="Number"
          name="input"
          value={this.input}
        />
        <button onClick={this.test}></button>
        <Mod/>
      </div>
    );
  }
}

export default Input;
