import React from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';

class App extends React.Component {
  render = () => {
    return (
      <Calculator className="calculator" />
    );
  }
}

export default App;
