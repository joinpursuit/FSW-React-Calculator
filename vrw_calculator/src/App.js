import { Component } from "react";
// import Numbers from './Components/Numbers';
import Buttons from './Components/Buttons';

import './App.css';
// import Display from "./Components/Display";

export default class App extends Component {
  // state = { value: "0", operator: "", elementOne: 0, elementTwo:0, function: "", runningTotal: 0 };

  render() {
  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      {/* <Display  state/>      */}
      <Buttons />
    </div>
  );

}

}

