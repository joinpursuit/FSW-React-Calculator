import React from 'react';
import './App.css';
import Screen from './Components/Screen/Screen'
import Button from './Components/Button/Button';

const addToScreen = (number) => {
  if(screenText === 0) screenText = number;
  else screenText += number;
} // End of addToScreen() function

const changeValue = () => {
  console.log("Hi");
} // End of changeValue() function

const resetScreen = () => {
  screenText = 0;
} // End of resetScreen();

function App() {
  return (
    <div className="calculator">
      <Screen className="screen" text={screenText}/>
      <Button className="center first" onclick={changeValue} text={"+/-"}/>
      <Button className="right first" onclick={resetScreen} text={"C"}/>
      <Button className="left second" onclick={addToScreen} text={1}/>
      <Button className="center second" onclick={addToScreen} text={2}/>
      <Button className="right second" onclick={addToScreen} text={3}/>
      <Button className="left third" onclick={addToScreen} text={4}/>
      <Button className="center third" onclick={addToScreen} text={5}/>
      <Button className="right third" onclick={addToScreen} text={6}/>
      <Button className="left fourth" onclick={addToScreen} text={7}/>
      <Button className="center fourth" onclick={addToScreen} text={8}/>
      <Button className="right fourth" onclick={addToScreen} text={9}/>
      <Button className="zero" onclick={addToScreen} text={0}/>
      <Button className="operand" onclick={addToScreen} text={"+"}/>
      <Button className="operand" onclick={addToScreen} text={"-"}/>
      <Button className="operand" onclick={addToScreen} text={"*"}/>
      <Button className="operand" onclick={addToScreen} text={"/"}/>
      <Button className="operand" onclick={addToScreen} text={"="}/>
      
    </div>
  );
}

export default App;
