import React from "react"
import "./ClearButton.css"

const ClearButton = (props) => {
  return (
    <div className="clear" onClick={props.handleClear}>
    {props.children}
    </div>
  )
}

export default ClearButton