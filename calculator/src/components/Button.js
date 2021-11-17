import { Component } from "react";


class Button extends Component{
    constructor(){
        super();
        this.state = {
            numInput: "",
            operator: "",
            lastNum: ""
        }
    }

    handleClick = (event) =>{
        const { numInput } = this.state;
        this.setState({
            numInput: numInput + event.target.value
        });
    };

    handleAllClear = () =>{
        this.setState({
            numInput: "",
            operator: "",
            lastNum: ""
        });
    };

    handleOperator = (event) => {
        // const {}
        this.setState({
            operator: event.target.value,
            lastNum: this.state.numInput,
            numInput: ""
        });
    };
    
    handleNeg = () =>{
        const { numInput } = this.state;
        let number = Number(numInput);
        this.setState({
            numInput: number * -1,
        });
    };

    handleDecimal = () => {
        const { numInput } = this.state;
        if(numInput.indexOf(".") === -1)
        this.setState({
            numInput: numInput + ".",
        });
    };

    handleZero = () => {
        const { numInput } = this.state;
        if(numInput !== "")
        this.setState({
            numInput: numInput + 0,
        });
    };

    handleCalculation = () => {
        const { numInput, operator, lastNum } = this.state;
        let numberI = Number(numInput);
        let numberL = Number(lastNum);

        let result = 0;
        switch (operator) {
            case "addition":
                result = numberL + numberI;
              break;
            case "subtraction":
                result = numberL - numberI;
              break;
            case "multiplcation":
                result = numberL * numberI;
              break;
            case "divison":
                result = numberL / numberI;
              break;
            default:
              break;
          }
          this.setState({
            numInput: result,
        });
    };

    render(){
        const { numInput, operator } = this.state;
        console.log(operator)
        console.log(numInput)
        
        return(
            <div className="calculator-container">
                <div id="display-container">
                    <input 
                    type="text" 
                    className="calculator-screen" 
                    placeholder="0" 
                    onInput={this.handleClick} 
                    value={Number(numInput).toLocaleString()} 
                    />
                </div>
                <div id="button-container">
                    <div className="scientific">
                        <button className="calc-button">sin</button>
                        <button className="calc-button">cos</button>
                        <button className="calc-button">tan</button>
                        <button className="calc-button">ln</button>
                        <button className="calc-button">log</button>
                        <button className="calc-button">!</button>
                        <button className="calc-button">&#928;</button>
                        <button className="calc-button">e</button>
                        <button className="calc-button">^</button>
                        <button className="calc-button">()</button>
                        <button className="calc-button" onClick={this.handleNeg}>+/-</button>
                        <button className="calc-button">&#8730;</button>
                    </div>
                <div className="general">
                    <div className="digits">
                        <button className="calc-button" onClick={this.handleClick} value="7">7</button>
                        <button className="calc-button" onClick={this.handleClick} value="8">8</button>
                        <button className="calc-button" onClick={this.handleClick} value="9">9</button>
                        <button className="calc-button" onClick={this.handleClick} value="4">4</button>
                        <button className="calc-button" onClick={this.handleClick} value="5">5</button>
                        <button className="calc-button" onClick={this.handleClick} value="6">6</button>
                        <button className="calc-button" onClick={this.handleClick} value="1">1</button>
                        <button className="calc-button" onClick={this.handleClick} value="2">2</button>
                        <button className="calc-button" onClick={this.handleClick} value="3">3</button>
                        <button className="calc-button" id="dot" value="dot" onClick={this.handleDecimal}>.</button>
                        <button className="calc-button" onClick={this.handleClick} value="0">0</button>
                        <button className="calc-button" id="equal" value="equal" onClick={this.handleCalculation}>=</button>
                    </div>
                    <div className="operator-side">
                        <button className="calc-button" value="all-clear" onClick={this.handleAllClear}>AC</button>
                        <button className="calc-button" value="divison" onClick={this.handleOperator}>÷</button>
                        <button className="calc-button" value="multiplcation" onClick={this.handleOperator}>x</button>
                        <button className="calc-button" value="subtraction" onClick={this.handleOperator}>-</button>
                        <button className="calc-button" value="addition" onClick={this.handleOperator}>+</button>
                    </div>
                </div>
            </div>
        </div>
       )
    }
}

export default Button;