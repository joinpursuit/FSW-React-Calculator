import React from 'react';
import './App.css';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
