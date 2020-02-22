import React, { Component } from 'react'
import Button from './button'
import './master.css'

class Calculator extends Component {
    state = {
        initialValue: 0
    }
    render(){
        console.log(this.state);
        
        return(
        <div>
        <Button/>
        </div>
        
        )
    }
}

export default Calculator;