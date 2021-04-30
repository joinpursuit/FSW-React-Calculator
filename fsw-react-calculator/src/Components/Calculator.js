import React from 'react' 

class Calculator extends React.Component {
state = {total: "0", display:"0", numArray: [], displayArray: []}

enterNum = (num) => {
    let currentNum = num
    this.setState((prevState) => ({numArray: [...prevState.numArray,currentNum]})) 
    this.setState({display: currentNum})
    debugger

}
    render(){
        const { display } = this.state
        
        return(
            <div>
                <h2>{display}</h2>
                <button onClick={() => this.enterNum("1")} value={"1"}>1</button>
                <button onClick={() => this.enterNum("2")} value={"2"}>2</button>
                <button onClick={() => this.enterNum("3")} value={"3"}>3</button>
                <button onClick={() => this.enterNum("4")} value={"4"}>4</button>
                <button onClick={() => this.enterNum("5")} value={"5"}>5</button>
                <button onClick={() => this.enterNum("6")} value={"6"}>6</button>
                <button onClick={() => this.enterNum("7")} value={"7"}>7</button>
                <button onClick={() => this.enterNum("8")} value={"8"}>8</button>
                <button onClick={() => this.enterNum("9")} value={"9"}>9</button>
                <button onClick={() => this.enterNum("0")} value={"0"}>0</button>
                
                <button>&#43;</button>
                <button>&minus;</button>
                <button>&times;</button>
                <button>&divide;</button>
                <button>&#61;</button>
                <button>&#177;</button>
                <button>AC</button>
            </div>
        )
    }
}

export default Calculator;