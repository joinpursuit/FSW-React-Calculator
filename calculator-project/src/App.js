import React, {Component} from 'react';
import './App.css';
 import Button from "./Component/buttons"
import Function from "./Component/Input"

class App extends Component{
  constructor(){
      super()
      this.state ={
          display: ""
      }
  }

  handleFunction = input =>{
    if (input === "="){
      this.compute()
    }else if(input === "c"){
      this.clear()
    }else if(input === "ce"){
      this.backspace()
    } else{
      this.setState({
        display: this.state.display + input
      })
    }
  }


  // compute = ()=>{
  //   let results = 
  // }
  
  clear = ()=>{
    this.setState({
      display: ""
    })
  }
  render(){
    return(
      <div>
          <div className="wireFrame">
            <Function display = {this.state.display}/>
            <Button onClick={this.handleFunction}/>
          </div>
      </div>
    )
  }


}

export default App;
