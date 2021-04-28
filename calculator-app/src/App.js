import React from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Components/Numbers';
import Input from './Components/Input';
import Results from './Components/Results';
import Operators from './Components/Operators';
import Equal from './Components/Equal';
import Clear from './Components/Delete';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      recentlyPressedValue: '',
      recentOperation: '',
      input: 0,
      result: '',
      positive: true,
    }
  }

  calculateResults = () => {

  }

  inputNumber = () => {

  }

  inputOperation = () => {

  }

  render() {
  return (
    <div className="calculator">
      <section className='results-container'>
        <Input digit={this.state.recentlyPressedValue}/>
        <Results result={this.state.result}/>
      </section>
      <section className='numbers-container'>
        <Numbers value={1}/>
        <Numbers value={2}/>
        <Numbers value={3}/>
        <Numbers value={4}/>
        <Numbers value={5}/>
        <Numbers value={6}/>
        <Numbers value={7}/>
        <Numbers value={8}/>
        <Numbers value={9}/>
        <Numbers value={0}/>
        <Numbers value={'.'}/>
      </section>
      <section className='operations-container'>
        <Operators op={'x'}/>
        <Operators op={'%'}/>
        <Operators op={'+'}/>
        <Operators op={'-'}/>
      </section>
      <section className='equal-container'>
        <Clear clear={'AC'}/>
        <Equal equal={'='}/>
      </section>
    </div>
  );
  }
}

export default App;
