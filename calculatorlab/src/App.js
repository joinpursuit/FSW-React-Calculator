import React from 'react';
// import DisplayValueForm from './Components/DisplayValueForm'
import Button from './Components/Button'
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = {
    value: ""
  }
  
render() {
  // const { buttons } = this.state
  
  return (
    <div className="App">
      <Button/>
    </div>
  );
}
}

export default App;
