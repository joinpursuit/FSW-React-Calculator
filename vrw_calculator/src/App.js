import { Component } from "react";
import './App.css';
import Numbers from './Components/Numbers';
// import Operators from './Components/Operators';

export default class App extends Component {
render() {
  return (
    <div className="App">
      <Numbers />
      {/* <Operators />      */}
    </div>
  );

}

}

