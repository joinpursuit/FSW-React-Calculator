import './App.css';
import Digits from './Components/Keypad';
// import Operations from './Components/Operations';
// import Results from './Components/Results';
// import Keypad from './Components/Keypad';
import { Component } from 'react';

class App extends Component{


  render() {
    return (
      <div className="App">
        {/* <Display/> */}
        <Digits />
        {/* <Operations/> */}
        {/* <Results/> */}
        
        
      </div>
    );
  }
  
}

export default App;
