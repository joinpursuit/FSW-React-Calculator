import React from "react"
import "../css/Buttons.css"

const Buttons =({value,className, onClick,id})=>{
    return(
        <button type="button" id={id} value={value} className={className} onClick={onClick}>{value}</button>
    )
}

export default Buttons;