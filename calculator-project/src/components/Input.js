import { Component } from "react";


class Input extends Component{
    constructor(){
        super();

        this.state ={
            characterInput: "",
            inputs:[]

        }
    
    }

    handleInputSubmission=(event)=>{
        this.setState({
            characterInput: event.target.value,
            inputs: [...this.state.inputs,characterInput]
        })
    }
    handleEqualCalculate=()=>{
        this.setState({

            
            characterInput: "",
        })

    }
    render(){
        return(
            <div>
                <input id="input-value" value={this.state.inputs} onChange={this.handleInputSubmission}></input>
            </div>
        )
    }
}

export default Input