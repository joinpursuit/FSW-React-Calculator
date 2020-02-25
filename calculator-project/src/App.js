import React from 'react';
import './App.css';
import Form from "./components/form/form";
import Clock from "react-live-clock";

function App() {
  return (
    <div className="App">
      <Clock className="clock" format={'HH:mm'} timezone={'US/Eastern'} />
      <h1 className="title">Jovanni's Calculator Project</h1>
      <Form/>
    </div>
  );
}

export default App;
