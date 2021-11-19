import './App.css';
import { Component } from 'react'
import Keypad from './components/Keypad';

// super-cool-site-by-jerry.netlify.app

class App extends Component {
  constructor(){
    super()
    this.state = {
      shownValue: '0',
      storedValue: '',
      operation: '',
    }
  }

  handleNumberButtons=(num)=>{
    let commasRemoved = this.state.shownValue.replaceAll(',','');
    if(this.state.shownValue === '0'){
      this.setState({
        shownValue: num
      })
    }else{
      this.setState({
        shownValue: Number(commasRemoved + num).toLocaleString()
      })
    }
  }

  handleEquals=()=>{
    let commasRemovedShown = this.state.shownValue.replaceAll(',','');
    let commasRemovedStored = this.state.storedValue.replaceAll(',','');

   switch (this.state.operation) {
     case '+':
  this.setState({
    shownValue: (Number(commasRemovedStored) + Number(commasRemovedShown)).toLocaleString()
  })
       break;
     case '-':
  this.setState({
    shownValue: (Number(commasRemovedStored) - Number(commasRemovedShown)).toLocaleString()
  })
       break;
     case '*':
  this.setState({
    shownValue: (Number(commasRemovedStored) * Number(commasRemovedShown)).toLocaleString()
  })
       break;
     case '/':
  this.setState({
    shownValue: (Math.round(Number(commasRemovedStored) / Number(commasRemovedShown))).toLocaleString()
  })
       break;
     default:
       break;
   }
  }

  handleOperations=(symbol)=>{
    this.setState({
      operation: symbol,
      storedValue: this.state.shownValue,
      shownValue: ''
    })
  }

  handleAllClear=()=>{
    this.setState({
      shownValue: '0',
      storedValue: '',
      operation: '',
    })
  }

  handlePositiveNegative=()=>{
    if(Number(this.state.shownValue) > 0){
      this.setState({
        shownValue: '-' + this.state.shownValue
      })
    }else if(Number(this.state.shownValue) < 0){
      this.setState({
        shownValue: String(this.state.shownValue).slice(1)
      })
    }
  }

  render(){
    return (
      <div id="main">
        <div id="screen">{ this.state.shownValue }</div>
        <Keypad numberFunc={this.handleNumberButtons} OpsFunc={this.handleOperations}
        equalsFunc={this.handleEquals} PosNegFunc={this.handlePositiveNegative}
        clearFunc={this.handleAllClear}/>
        
      </div>
    )
  }
}

export default App