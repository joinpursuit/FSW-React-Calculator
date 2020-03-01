import React from "react";
import "../buttons/buttons.css";
import { create, all } from "mathjs";
// import numeral from "numeral";

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
            if(value === "=" || value === "%" || value === "C" || value === "±") {
                return <button key={index} className="buttons" id={oName} value={value} onClick={this.calculate}>{value}</button>
            } else {
                return <button key={index} className="buttons" id={oName} value={value} onClick={this.display}>{value}</button>
            }
        })
    }

    display = (e) => {
        e.preventDefault();
        let value = e.target.value
        let updated = this.state.displayScreen;
        updated += value;
        let commas = this.numberWithCommas(updated)
        this.setState({displayScreen:commas});
    }

   numberWithCommas =(x)=> {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

calculate = (e) => {
    e.preventDefault();
    let value = e.target.value
    let solved
    if(value === "C") {
        solved = ""
    } else if(value === "±") {
        if(this.state.displayScreen[0] === "-"){
            let newNum = this.state.displayScreen.slice(1)
            solved = newNum
            } else {
                let polar = "-" + this.state.displayScreen 
                solved =polar
            }
        } else if(value === "%"){
            solved = math.evaluate(this.state.displayScreen + "/100");
        } else {
                solved = math.evaluate(this.state.displayScreen);
        }
        this.setState({displayScreen:solved})
    }

    render(){
        const { NumberButtons, OperatorButtons, displayScreen } = this.state;
        return(
            <form className="form">
                <div className="display">
                    {displayScreen}
                </div>
                <div className="press">
                    {this.populateButtons(NumberButtons)}
                    {this.populateButtons(OperatorButtons)}
                </div>
            </form>
        )
    }
}

export default Buttons;