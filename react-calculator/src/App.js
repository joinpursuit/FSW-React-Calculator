// import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      shownValue: '0',
      storedValue: '10',
      operation: '+',
    }
  }

  handleNumberButtons=(num)=>{
    if(this.state.shownValue === '0'){
      this.setState({
        shownValue:  num
      })
    }else{
      this.setState({
        shownValue: this.state.shownValue + num
      })
    }
    
  }

  handleEquals=()=>{
   switch (this.state.operation) {
     case '+':
  this.setState({
    shownValue: Number(this.state.storedValue) + Number(this.state.shownValue)
  })
       break;
     case '-':
  this.setState({
    shownValue: Number(this.state.storedValue) - Number(this.state.shownValue)
  })
       break;
     case '*':
  this.setState({
    shownValue: Number(this.state.storedValue) * Number(this.state.shownValue)
  })
       break;
     case '/':
  this.setState({
    shownValue: Number(this.state.storedValue) / Number(this.state.shownValue)
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

  render(){
    return (
      <div>
        <div>{ this.state.shownValue }</div>
        <button onClick={this.handleAllClear}> All Clear </button><br/>
        {/* <button onClick={()=>this.handleNumberButtons(this.state.numInput)}> +{this.state.numInput} </button> */}
        <button onClick={()=>this.handleNumberButtons('1')}> 1 </button>
        <button onClick={()=>this.handleNumberButtons('2')}> 2 </button>
        <button onClick={()=>this.handleNumberButtons('3')}> 3 </button><br/>
        <button onClick={()=>this.handleNumberButtons('4')}> 4 </button>
        <button onClick={()=>this.handleNumberButtons('5')}> 5 </button>
        <button onClick={()=>this.handleNumberButtons('6')}> 6 </button><br/>
        <button onClick={()=>this.handleNumberButtons('7')}> 7 </button>
        <button onClick={()=>this.handleNumberButtons('8')}> 8 </button>
        <button onClick={()=>this.handleNumberButtons('9')}> 9 </button><br/>
        <button onClick={()=>this.handleNumberButtons('0')}> 0 </button>
        <button onClick={()=>this.handleOperations('+')}> + </button>
        <button onClick={()=>this.handleOperations('-')}> - </button>
        <button onClick={()=>this.handleOperations('/')}> / </button> 
        <button onClick={()=>this.handleOperations('*')}> * </button>
        <button onClick={()=>this.handleEquals()}> = </button>
        <br/>
        {/* <input
          type='number'
          value={this.state.numInput}
          onInput={this.handleInput}
          placeholder='Number pls'/> */}

      </div>
    )
  }
}

export default App

// Calculator steps
// Put numbers together as strings to create one VALUE
// Choose an operation
// Put more numbers together
// Submit button