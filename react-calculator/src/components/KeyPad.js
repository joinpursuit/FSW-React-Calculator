import React from "react";
import Button from "./Button";
//keypad will contain all buttons
const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".","√ ", "="],
  ];

class KeyPad extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            
            btnValues.flat().map((btn, i)=> {
               return <Button key={i} btn ={btn} handleButtons={this.props.handleButtons}/>
            })
            
        )
    }
}
export default KeyPad;