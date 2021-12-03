import {Component} from "react"

class Calculator extends Component{
constructor(){
    super()
    this.state = {
        current: "",
        operator:"",
        pValue:"",
        result:0
        
    }
}


handlerValue = (event) =>{
    this.setState({
     current: this.state.current + event.target.value 

    })
    

}
handlerOperator =(event)=>{
    const {current,pValue,operator,result} = this.state
    if(current&&pValue) this.handleCalculation()
    this.setState({
        operator: event.target.value,
        pValue:result || current,
        current: ""
    })
}
handleCalculation =()=>{
    const {operator,pValue,current, result} = this.state
    switch(operator){
        case '+':
            this.setState({
                result: Number(pValue) + Number(current),
                pValue: Number(pValue) + Number(current),
                current:""
            })
            break;
        case '-':
             this.setState({
                 result: Number(pValue) - Number(current),
                 pValue: Number(pValue) - Number(current),
                current:""
             })
             break;
        case 'x':
            this.setState({
                result: Number(pValue) * Number(current),
                pValue: Number(pValue) * Number(current),
                current:""
            })
            break;  
        case '/':
            this.setState({
                result: Number(pValue) / Number(current),
                pValue: Number(pValue) / Number(current),
                current:""
            })
            break;      
        default:
            break;   
    }
        
}

handlerDelete = () =>{
    this.setState ({
     current:(this.state.current.slice(0, -1))
    })
}

handleAllClear = () =>{
    this.setState({
        current: "",
        operator:"",
        pValue:"",
        result:0
    })
}




render(){
    return (
        <div className="Calculator">
        <div className="screenDisplay">
        <div className="currentNumber">{this.state.current || this.state.result}</div>
                </div>
            <button  className="twoSpaces"  onClick={this.handleAllClear}>AC</button>
            <button className="button" onClick={this.handlerDelete}>DEL</button>
            <button className="operation" value={"/"} onClick={this.handlerOperator}>/</button>
            <button className="button" value={"7"} onClick={this.handlerValue}>7</button>
            <button className="button" value={"8"} onClick={this.handlerValue}>8</button>
            <button className="button" value={"9"} onClick={this.handlerValue}>9</button>
            <button className="operation" value={"x"} onClick={this.handlerOperator } >x</button>
            <button className="button" value={"4"} onClick={this.handlerValue}>4</button>
            <button className="button" value={"5"} onClick={this.handlerValue}>5</button>
            <button className="button" value={"6"} onClick={this.handlerValue}>6</button>
            <button className="operation"  value={"+"} onClick={this.handlerOperator} >+</button>
            <button className="button" value={"1"} onClick={this.handlerValue}>1</button>
            <button className="button" value={"2"} onClick={this.handlerValue} >2</button>
            <button className="button" value={"3"} onClick={this.handlerValue} >3</button>
            <button className="operation"  value={"-"} onClick={this.handlerOperator} >-</button>
            <button className="button" value={"."} onClick={this.handlerValue}>.</button>
            <button className="button" value={"0"} onClick={this.handlerValue}>0</button>
            <button className="twoSpaces" onClick={this.handleCalculation}>=</button>
            
            
    </div>
    )
}
}

export default Calculator