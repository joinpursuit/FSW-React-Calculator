import { Component } from "react";
import buttons from "../data/buttonData";
import Display from "./Display";

class Keypad extends Component{
    constructor() {
        super();
        this.state = {
            result: "0",
            num1: "",
            num2: "",
            operator: "",
            displayOperator: "",
            isActiveOperator: false,
        }
    }

    displayBtnData = (data) => {
        return data.map((dataElement) => {
            if(dataElement.type === "number") {
                return <button className= "button" onClick={()=>this.handleNumberInput(dataElement)}>{dataElement.display}</button>
            }
            if(dataElement.type === "operation") {
                return <button className= "button" onClick={()=>{this.handleOperatorInput(dataElement)}}>{dataElement.display}</button>
            }
            if(dataElement.type === "feature") {    
                return <button className= "button" onClick={()=>{this.handleFeatures(dataElement)}}>{dataElement.display}</button>
            }
            if(dataElement.type === "equal") {
                return <button className= "button" onClick={this.handleCalculation}>{dataElement.display}</button>
            }
        })
    }  

    handleNumberInput = (numObj) => {
        let {isActiveOperator, num1, num2} = this.state;
    
        if(!isActiveOperator) {  
            this.setState({
              num1: num1 + numObj.display,
            })
        } else {
            this.setState({
              num2: num2 + numObj.display
            })
        }
      }

    handleOperatorInput = (operatorObj) => {
        this.setState({
          operator: operatorObj.value,
          displayOperator: operatorObj.display,
          isActiveOperator: true,
        })
    }

    handleFeatures = (feature) => {
        switch(feature.value) {
          case "clearAll": this.featureClearAll(); break;
          case "clearCurr": this.featureClearCurrent(); break; 
          case "posNeg": this.featurePosNeg(this.state.num1, this.state.num2); break;
          case "percent": this.featurePercent(); break;
          case "decimal": this.featureDecimal(); break;
          default: return "testing";
        }
    }

    handleCalculation = () => {
        const {num1, num2, operator} = this.state;
        let total = 0;

        switch(operator) {
          case "add": total = this.operationAdd(num1, num2); break;
          case "subtract": total = this.operationSubtract(num1, num2); break;
          case "multiply": total = this.operationMultiply(num1, num2); break;
          case "divide": total = this.operationDivide(num1, num2); break;
          default: return "testing";
        }
        this.setState({
          result: total,
          num1: total,
          num2: "",
          operator: "",
          displayOperator: "",
          isActiveOperator: false,
        })
      }

    operationAdd = (num1, num2) => {
        return Number(num1) + Number(num2)
    }

    operationSubtract = (num1, num2) => {
        return num1 - num2;
    }

    operationMultiply = (num1, num2) => {
        return num1 * num2;
    }

    operationDivide = (num1, num2) => {
        return num1 / num2;
    }      

    featureClearAll = () => {
        this.setState({
          displayOperator: "",
          isActiveOperator: false,
          num1: "",
          num2: "",
          operator: "",
          result: "0",
        })
    }
    
    featureClearCurrent = () => {
        let {num1, num2, isActiveOperator} = this.state;
        let str1 = num1;
        let str2 = num2;

        if(typeof num1 === "number") {
            str1 = num1.toString();
        }
        if(typeof num2 === "number") {
            str2 = num2.toString();
        }

        let newNum1 = str1.substring(0, str1.length - 1);
        let newNum2 = str2.substring(0, str2.length - 1);

        if(!isActiveOperator) {
            this.setState({
                num1: newNum1,
            })
        } else {
            this.setState({
                num2: newNum2,
            })
        }
    }

    featurePosNeg = (str1, str2) => {
        let {isActiveOperator} = this.state;
        let newNum1 = Number(str1) * -1;
        let newNum2 = Number(str2) * -1;

        if(!isActiveOperator) {
            this.setState({
                num1: newNum1,
            })
        } else {
            this.setState({
                num2: newNum2
            })
        }
    }

    featurePercent = () => {
        let {num1, num2, isActiveOperator} = this.state;
        let newNum1 = Number(num1);
        let newNum2 = Number(num2);
        let total = ((newNum2 / 100) * newNum1);

        if(!isActiveOperator) {
            this.setState({
                num1: Number(num1) * .01,
            })
        } else {
            this.setState({
                num2: total,
            })
        }
    }

    featureDecimal = () => {
        let {num1, num2, isActiveOperator} = this.state;
        let newNum1 = num1 + ".";
        let newNum2 = num2 + ".";

        if(!isActiveOperator) {   
            if(num1.includes(".")) return;
            else {
                this.setState({
                    num1: newNum1,
                })
            }
        } else {  
            if(num2.includes(".")) return;
            else {
                this.setState({
                    num2: newNum2,
                })
            }
        }
    }

    render() {
        let {result, num1, num2, displayOperator} = this.state;
        return(
            <div id="keypad">
                <div id="display">
                    <Display result = {result} 
                             num1 = {num1}
                             num2 = {num2}
                             displayOperator = {displayOperator}
                    />
                </div>
                <div id="display-buttons">{this.displayBtnData(buttons)}</div>
            </div>
        )
    }
}

export default Keypad;