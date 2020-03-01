import React from 'react';
// import DisplayValueForm from './Components/DisplayValueForm'
import Button from './Components/Button'
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    value: "hi"
  }
  
render() {
  // const { buttons } = this.state
  
  return (
    <div className="App">
      <p id="title">Calculator App</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button/>
    </div>
  );
}
}

export default App;
