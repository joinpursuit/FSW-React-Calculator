import React from "react";
import Button from "./Button";
//keypad will contain all buttons
const btnObj = [
        // ["C", "+-", "%", "/"],
    {display:"C",value:"clear", type:"operation"}, 
    {display:"+-", value:"inverse", type:"operation"}, 
    {display:"%", value:"percent", type:"operation"}, 
    {display:"/", value:"divide", type:"operation"}, 

    // ["7", "8", "9", "X"],
    {display:"7", value:"7", type:"number"}, 
    {display:"8", value:"8", type:"number"}, 
    {display:"9", value:"9", type:"number"}, 
    {display:"X", value:"multiply", type:"operation"}, 

    // ["4", "5", '6', "-"],
    {display:"4", value:"4", type:"number"}, 
    {display:"5", value:"5", type:"number"}, 
    {display:"6", value:"6", type:"number"}, 
    {display:"-", value:"subtract", type:"operation"}, 

    // ['1', '2', '3', "+"],
    {display:"1", value:"1", type:"number"}, 
    {display:"2", value:"2", type:"number"}, 
    {display:"3", value:"3", type:"number"}, 
    {display:"+", value:"add", type:"operation"}, 

    // ['0', ".","√ ", "="],
    {display:"0", value:"0", type:"number"}, 
    {display:".", value:"decimal", type:"operation"}, 
    {display:"√ ", value:"radical", type:"operation"}, 
    {display:"=", value:"equal", type:"operation"}, 
  ];

class KeyPad extends React.Component {
    constructor(){
        super();
    }

    render() {
       // console.log("Refer to Btn Obj Here ~~~",btnObj)
        return (
            btnObj.map((btn, i)=> {
               return (<Button 
                            key={i} 
                            btn ={btn} 
                            handleButtons={this.props.handleButtons} 
                        />)
            })         
        )
    }
}
export default KeyPad;