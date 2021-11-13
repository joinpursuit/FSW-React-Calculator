// import './App.css';
import { Component } from "react"

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: "",
    }
  }

  // handleDecrement=(num)=>{
  //   this.setState({
  //     count: this.state.count - num
  //   })
  // }

  handleNumberButtons=(num)=>{
    this.setState({
      count: this.state.count + num
    })
  }

  // handleInput=(event)=>{
  //   this.setState({
  //     numInput: event.target.value
  //   })
  // }

  handleAllClear=()=>{
    this.setState({
      count: 0
    })
  }

  render(){
    return (
      <div>
        <div>{ this.state.count }</div>
        <button onClick={this.handleAllClear}> All Clear </button>
        {/* <button onClick={()=>this.handleNumberButtons(this.state.numInput)}> +{this.state.numInput} </button> */}
        <button onClick={()=>this.handleNumberButtons(1)}> 1 </button>
        <button onClick={()=>this.handleNumberButtons(2)}> 2 </button>
        <button onClick={()=>this.handleNumberButtons(3)}> 3 </button>
        <button onClick={()=>this.handleNumberButtons(4)}> 4 </button>
        <button onClick={()=>this.handleNumberButtons(5)}> 5 </button>
        <button onClick={()=>this.handleNumberButtons(6)}> 6 </button>
        <button onClick={()=>this.handleNumberButtons(7)}> 7 </button>
        <button onClick={()=>this.handleNumberButtons(8)}> 8 </button>
        <button onClick={()=>this.handleNumberButtons(9)}> 9 </button>
        <br/>
        <input
          type="number"
          value={this.state.numInput}
          onInput={this.handleInput}
          placeholder="Number pls"/>

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