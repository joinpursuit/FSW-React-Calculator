import './App.css';
import { Component } from 'react'

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
    console.log(typeof this.state.shownValue);
    console.log(this.state.shownValue)
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
        
        <div id="keypad">
            <button id="allClear" onClick={this.handleAllClear}> AC </button>
            <button id="PosNeg" onClick={()=>this.handlePositiveNegative()}> +/- </button>
            <br/>
            <button className="operationButtons" onClick={()=>this.handleOperations('/')}> / </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('7')}> 7 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('8')}> 8 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('9')}> 9 </button>
            <button className="operationButtons" onClick={()=>this.handleOperations('*')}> X </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('4')}> 4 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('5')}> 5 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('6')}> 6 </button>
            <button className="operationButtons" onClick={()=>this.handleOperations('-')}> - </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('1')}> 1 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('2')}> 2 </button>
            <button className="numberButtons" onClick={()=>this.handleNumberButtons('3')}> 3 </button>
            <button className="operationButtons" onClick={()=>this.handleOperations('+')}> + </button>
            <br/>
            <button id="zero-button" onClick={()=>this.handleNumberButtons('0')}> 0 </button>
            <br/> 
            <button id="equals-button" onClick={()=>this.handleEquals()}> = </button>  
        </div>
      </div>
    )
  }
}

export default App