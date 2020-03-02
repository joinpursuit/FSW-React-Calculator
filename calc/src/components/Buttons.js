import React from "react"
import "../css/Buttons.css"

const Buttons =({value,className, onClick})=>{
    return(
        <button type="button" value={value} className={className} onClick={onClick}>{value}</button>
    )
}

export default Buttons;