import React from "react"
import "./Button.css"

const isOperator = (value) => {
  return !isNaN(value) || value === "." || value === "="
}

const Button = (props) => {
  return (
  <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>
    {props.children}
  </div>
  )
  }

export default Button