import React from "react";

const handleButtonClick = (e,props) => {
    debugger
    // this.setState({
    //     displayValue: e.target.value
    // })

    this.setState((prevState,props)=>{
        if(prevState.displayValue){
            return {
                displayValue: prevState.displayValue +1
            }
        }
        // debugger
        // return {
        // displayValue: prevState.displayValue +1
        // }
    })
}

export default numberClick 