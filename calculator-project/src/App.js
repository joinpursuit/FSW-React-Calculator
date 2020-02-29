import React, {Component} from 'react';
import './App.css';
 import Button from "./Component/buttons"
import Display from "./Component/Display"
import { evaluate }  from "mathjs"

class App extends Component{
  constructor(){
      super()
      this.state ={
          display: ""
      }
  }

  onClick = input =>{
    if (input === "="){
      this.compute()
    }else if(input === "clear"){
      this.clear()
    }else{
      this.setState({
        display: this.state.display + input
      })
    }
  }


  compute = ()=>{
    this.setState({display: evaluate(this.state.display)})
  }
  
  clear = ()=>{
    this.setState({
      display: ""
    })
  }
  render(){
    console.log(this.state)
    return(
      <div>
          <div className="wireFrame">
            <Display display = {this.state.display}/>
            <Button onClick={this.onClick}/>
          </div>
      </div>
    )
  }


}

export default App;
