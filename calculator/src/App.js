import React from 'react';
import './App.css';
import Screen from './Components/Screen/Screen'
import Button from './Components/Button/Button';

const addToScreen = (number) => {
  console.log(typeof number);
} // End of addToScreen()

function App() {
  return (
    <div className="calculator">
      <Screen />
      <Button onclick={addToScreen} text={1} />
    </div>
  );
}

export default App;
