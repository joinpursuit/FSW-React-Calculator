
import './App.css';
import KeyPad from './components/KeyPad';
import {Component} from 'react'
import Display from './components/Display';



class App extends Component {

  //Build Constructor 

  constructor() {
    super();
    this.state = {
      displaySays: 0
    };
  }

  //To create 

  onClick = button => {

    if (button === "=") {
      this.execute()
    }

    else if (button === "Clear") {
      this.reset()
    }

    else if (button === "+/-") {
      this.negative()
    }

    else {
      this.setState({
        displaySays: this.state.displaySays + button
      })
    }

  }

execute = () => {
    
  try {
    this.setState ({
      displaySays: (eval(this.state.displaySays))
    })
  } catch (error) {
    this.setState({
      result: 
      "e"
    })
  }
  }

  reset = () => {
    this.setState({
      displaySays: 0
    })
  }


  render() {
    return (
      <div className = "calcBorder">
        <Display displaySays = {this.state.displaySays}/>
        <KeyPad onClick = {this.onClick}/>
      </div>
    );
  }
  
}

export default App;
