import React from "react";
import ButtonPad from "./components/buttons";
import "./App.css";
import { render } from "react-dom";
import "./master.css";

class App extends React.Component {
  state = {
    num: ""
  };

  handleChange = e => {
    const { num } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <ButtonPad handleChange={this.handleChange} />
      </div>
    );
  }
}
export default App;
