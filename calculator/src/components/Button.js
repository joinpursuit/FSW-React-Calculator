import React from "react"
import "./button.css"

const chkOperator = (input) => {
  return !isNaN(input) || input === "." || input === "="
}

const Button = (props) => {
  <div>
    {props.children}
  </div>
}