import React from "react";
import "../buttons/buttons.css";
import { create, all } from "mathjs";
import numeral from "numeral";

const config = { };
const math = create(all, config);

class Buttons extends React.Component{
    state= {
        NumberButtons: [{oName: "zero", value: "0"}, {oName: "one", value: "1"}, {oName: "two", value: "2"}, {oName: "three", value: "3"}, {oName: "four", value: "4"}, {oName: "five", value: "5"}, {oName: "six", value: "6"}, {oName: "seven", value: "7"}, {oName: "eight", value: "8"}, {oName: "nine", value: "9"}],
        OperatorButtons: [{oName: "decimal", value: "."},{ oName: 'add', value: "+"}, { oName: 'subtract', value: "-"}, { oName: 'multiply', value: "*"}, { oName: 'divide', value: "/"}, { oName: 'polar', value: "±"}, {oName: 'percentage', value: "%"}, { oName: 'clear', value: "C"}, { oName: 'equal', value: "="}],
        displayScreen: ""
    }
    

    populateButtons = (arr) => {
        return arr.map((button, index) =>{
            const { oName, value } = button
            if(value === "=") {
                return <button key={index} className="buttons" id={oName} value={value} onClick={this.calculate}>{value}</button>
            } else if ( value === "%") {
                return <button key={index} className="buttons" id={oName} value={value} onClick={this.calculate}>{value}</button>
            }
            else {
                return <button key={index} className="buttons" id={oName} value={value} onClick={this.display}>{value}</button>
            }
        })
    }

    display = (button) => {
        let value = button.target.value
        if(value === "C") {
            this.setState({displayScreen:""})
        } else if(value === "±") {
            if(this.state.displayScreen[0] === "-"){
                let newNum = this.state.displayScreen.slice(1)
                this.setState({displayScreen: newNum})
            } else {
                let polar = "-" + this.state.displayScreen 
                this.setState({displayScreen: polar})
            }
        } else {
            let updated = this.state.displayScreen;
            updated += value;
            this.setState({displayScreen:updated});
            //trying to add commas and concat strings to evaluate
            // if(value === this.state.NumberButtons[value]){
            //     let updated = this.state.displayScreen;
            //     updated += value;
            //     debugger
            //     let addedCommas = numeral(updated).format('0,0');
            //     this.setState({displayScreen:addedCommas});
            // }
        }
    }
    
    calculate = (button) => {
        let value = button.target.value
        let solved
        if(value === "%"){
            solved = math.evaluate(this.state.displayScreen + "/100");
        } else {
            solved = math.evaluate(this.state.displayScreen);
        }
        this.setState({displayScreen:solved})
    }

    render(){
        const { NumberButtons, OperatorButtons, displayScreen } = this.state;
        return(
            <>
                <div className="display">
                    {displayScreen}
                </div>
                <div className="press">
                    {this.populateButtons(NumberButtons)}
                    {this.populateButtons(OperatorButtons)}
                </div>
            </>
        )
    }
}

export default Buttons;