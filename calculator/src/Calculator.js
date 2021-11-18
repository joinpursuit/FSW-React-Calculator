import {Component} from "react"

class Calculator extends Component{
constructor(){
    super()
    this.state = {
        current: "",
        lastNumberEntered: "",
        operator:"",
        value:"",
        changedOperator: false,
        savedNewNumber: false,
    }
}

handlerValue = (event) =>{
    this.setState({
        value: event.target.getAttribute("data"),
        current: this.state.current + this.state.value

    })
    

}

handlerDelete = () =>{
    this.setState ({
     current:(this.state.current.slice(0, -1))
    })
}

handleAllClear = () =>{
    this.setState({
        current:"",
        value:"",
        changedOperator:false,
    })
}




render(){
    return (
        <div className="Calculator">
        <div className="screenDisplay">
            <div className="previousNumber"></div>
                <div className="currentNumber">{this.state.current}</div>
                </div>
            <button  className="twoSpaces"  onClick={this.handleAllClear}>AC</button>
            <button className="button" onClick={this.handlerDelete}>DEL</button>
            <button className="operation" data={"/"} >/</button>
            <button className="button" data={"7"} onClick={this.handlerValue}>7</button>
            <button className="button" data={"8"} onClick={this.handlerValue}>8</button>
            <button className="button" data={"9"} onClick={this.handlerValue}>9</button>
            <button className="operation" data={"x"} >x</button>
            <button className="button" data={"4"} onClick={this.handlerValue}>4</button>
            <button className="button" data={"5"} onClick={this.handlerValue}>5</button>
            <button className="button" data={"6"} onClick={this.handlerValue}>6</button>
            <button className="operation"  data={"+"} >+</button>
            <button className="button" data={"1"} onClick={this.handlerValue}>1</button>
            <button className="button" data={"2"} onClick={this.handlerValue} >2</button>
            <button className="button" data={"3"} onClick={this.handlerValue} >3</button>
            <button className="operation"  data={"-"} >-</button>
            <button className="button" data={"."} onClick={this.handlerValue}>.</button>
            <button className="button" data={"0"} onClick={this.handlerValue}>0</button>
            <button className="twoSpaces">=</button>
            
            
    </div>
    )
}
}

export default Calculator