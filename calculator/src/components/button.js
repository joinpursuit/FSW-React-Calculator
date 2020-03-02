import React, { Component } from 'react'
import {numbers, operators, modify} from './buttonValues'
import '..master.css'

class Button extends Component{
    // state = {
    //     input: "",
    //     numbers: [0,1,2,3,4,5,6,7,8,9],
    //     displayValue: "",
    //     perviousValue: ""
    // }

    handleChange = (e) => {
    

    }
//  populateButtons = (arr) => {
//     return  arr.map((button,index) => {
//         return(
//             <button key={index} className= "allNums"></button>    
//             )
//      })
//  }
    render(){
        const {numbers, input, displayValue, perviousValue } = this.state
    return (
             
    <div className="allButtons">
    {/* populateButtons(numbers) */}
        <div className="AllNumbers" onClick=" ">
            <button className="0">0</button>
            <button className="1">1</button>
            <button className="2">2</button>
            <button className="3">3</button>
            <button className="4">4</button>
            <button className="5">5</button>
            <button className="6">6</button>
            <button className="7">7</button>
            <button className="8">8</button>
            <button className="9">9</button>
        </div>
         <div className="operators">
            <button className="+">+</button>
            <button className="-">-</button>
            <button className="*">*</button>
            <button className="/">÷</button>
            <button className="=">=</button>
            <button className="clear">C</button>

        </div>
         
    </div>
        )
    }
}


export default Button;




// setState is used to update states