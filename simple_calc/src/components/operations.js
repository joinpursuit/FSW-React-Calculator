// import React from "react";

const operation = (num1,num2,op) => {
    // debugger
    let numValue = Number(num1);
    let prevValue = Number(num2);
    if(op === "+"){
       return addingOperation(numValue, prevValue)
    } else if(op === "-"){
        return subtractOperation(numValue, prevValue)
    } else if(op === "*"){
        return multiOperation(numValue, prevValue)
    } else if(op === "/"){
        return divideOperation(numValue, prevValue)
    } 

    
}

const addingOperation = (numValue, prevValue) => {
let value = numValue + prevValue
return value
}

const subtractOperation = (numValue, prevValue) => {
    let value = numValue - prevValue
return value
}

const multiOperation = (numValue, prevValue) => {
    let value = numValue * prevValue
return value
}

const divideOperation = (numValue, prevValue) => {
    let value = numValue / prevValue
return value
}



export default operation;