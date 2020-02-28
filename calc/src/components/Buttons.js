import React from "react"

const Buttons =({value,className, onClick})=>{
    return(
        <button type="button" value={value} className={className} onClick={onClick}>{value}</button>
    )
}

export default Buttons;