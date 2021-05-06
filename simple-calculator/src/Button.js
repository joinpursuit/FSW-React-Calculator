import React from "react"
import "./Button.css"

const Button = ({content, type, handleClick}) => {
    return <div className={"Button"}>{content} onClick{content}</div>
}

export default Button;