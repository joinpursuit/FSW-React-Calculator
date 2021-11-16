import {Component} from "react";
import './App.css';
import data from "./data/calckeys"

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      keyList: data,
      startingValue: 0,
      calculatedValue: 0,
      operator:"",
      // inputs: []
    }
  }

  render(){
    return(
      <div id="app-container">
        <div className="calc-container">
          <Input />
          <KeyPad />
          </div>
          
          
        </div>
        
    )
  }
}

export default App;
