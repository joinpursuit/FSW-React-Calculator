import React from 'react';
import './App.css';
import Buttons from "./components/buttons/buttons";
import Clock from "react-live-clock";

class App extends React.Component{
  render () {
    return (
      <div className="App">
        <Clock className="clock" format={'hh:mm A'} timezone={'US/Eastern'} />
        <h1 className="title">Jovanni's Calculator Project</h1>
        <Buttons/>
      </div>
    );
  }
}

export default App;
