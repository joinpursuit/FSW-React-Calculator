
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
        displaySays: this.state.displaySays 
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
        Testing Fonts
        <Display />
        <KeyPad />
      </div>
    );
  }
  
}

export default App;
