
import React, { Component } from 'react'
import Tot from './Total'
import Cal from './Calculator'
import './App.css';
//import { render } from '@testing-library/react';



export default class App extends Component {

//results beggining stage
state = {
  result:''
 
}
//results after number clicked
select = buttonN => {
  if (buttonN === '=') {
    this.math();
  } else if (buttonN === 'Clear') {
    this.reset()
  } else if (buttonN === 'Delete') {
    this.delete()
  }else
  this.setState({
      result: this.state.result + buttonN
  });
}


//delete
delete = () => {
this.setState({
  result: this.state.result.slice(0, -1)
})
}

//reset
reset = () => {
  this.setState({
   result:'0'
  })
}
//math
math = () => {
  try {this.setState({
    result:eval(this.state.result)
  });
} catch(e)  {
    this.setState({

      result: 'error'
    });
}
}
render() {

  return (
    <div className="App">
      <div className='calc'>
     
      <Tot result={this.state.result}/>
      <Cal select={this.select}/>
      </div>
    </div>
  );
}
}