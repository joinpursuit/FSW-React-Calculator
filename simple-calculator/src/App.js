import { Component } from "react";
import "./App.css";
import Display from "./Display";
import Keys from "./Keys";

class App extends Component {
  state = { answer: "" };
  render() {
    return (
      <section className="App">
        <Display />
        <Keys />
      </section>
    );
  }
}

export default App;
