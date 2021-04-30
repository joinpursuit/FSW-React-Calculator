import { Component } from "react";
// import Numbers from './Components/Numbers';
import Buttons from './Components/Buttons';

import './App.css';

export default class App extends Component {
render() {
  return (
    <div className="App">
      <Buttons />
      {/* <Operators />      */}
    </div>
  );

}

}

