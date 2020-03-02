import React from "react"
import "./Button.css"

const buttonClass = (value) => {
  if (value === "AC" || value === "+/-" || value === "%" || value === ".") {
    return "alternate"
  } else if (isNaN(value)){
    return "operator"
  } else if (value === "0") {
    return "zero"
  } else {
    return null
  }
}

const Button = (props) => {
  return (
  <div className={`button-wrapper ${buttonClass(props.children)}`} onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
  )
  }

export default Button