import { Component } from "react";

class Buttons extends Component{
    constructor(){
        super();

        this.state = {
            numArr: '',
        }
    }

    createButtons=()=>{
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let newArr = arr.map((num)=>{
            <input type="button" id={num} value={Number(num)}/>
        })
        return newArr;
    }


    render(){
        return(
            <div className="buttons-container">
                <div>{this.createButtons}</div>
            </div>
        )
    }
    
}

export default Buttons;