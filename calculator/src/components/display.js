import React, { Component } from 'react'

class Display extends Component{
    state = {
        displayValue: "",
        previousValue: "",
        operation: ["+","-","*","/"]
    }
    render(){
        return(
            <div className="display">
                test
            </div>
        )
    }
}

export default Display;