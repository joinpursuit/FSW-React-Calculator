import  React from 'react'
import SwithPanel from './components/SwitchPanel'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      total: null,
      next: null,
      operation: null,
    }
  }
  // handleClick =buttonName =>{
  //   this.setState(calculate(this.state.buttonName))
  // }
  render(){
  return (
    <div className ="component-app">
  
      <SwithPanel clickHandler ={this.handleClick} />
      
    </div>
  )
}

}
export default App;
