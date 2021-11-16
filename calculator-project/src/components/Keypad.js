import { Component } from "react";

class Keypad extends Component{
    constructor(){
        super();
    }

     KeyGen() {

        calckeys.map((key)=>{
            return (
                <div>
                    <button value={key} title={key}/>
                </div>
            )
        })
        
    
    }
    

    render(){
        return (
            <KeyGen />
            
        )
    }
}

export default Keypad