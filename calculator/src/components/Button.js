import React from "react"
import "./Button.css"

const isOperator = (value) => {
  return !isNaN(value) || value === "." || value === "="
}

const Button = (props) => (
  <div>
    {props.children}
  </div>
)

export default Button