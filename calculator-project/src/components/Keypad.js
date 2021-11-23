import { Component } from "react";
import buttons from "../data/buttonData";
import Display from "./Display";

class Keypad extends Component{
    displayBtnData = (data) => {
        return data.map((dataElement) => {
            if(dataElement.type === "number") {
                return <button className= "button" onClick={()=>this.handleNumberInput(dataElement)}>{dataElement.display}</button>
            }
            if(dataElement.type === "operator") {
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

    render() {
        return(
            <div id="keypad">
                <div id="display"><Display /></div>
                <div id="display-buttons">{this.displayBtnData(buttons)}</div>
            </div>
        )
    }
}

export default Keypad;