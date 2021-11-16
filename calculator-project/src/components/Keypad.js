import { Component } from "react";
import data from calckeys


class Keypad extends Component{
    constructor(){
        super();
        this.state = {
            keyList: data,

        }
    }

    

    render(){
        return (
            <KeyGen />
            
        )
    }
}

export default Keypad