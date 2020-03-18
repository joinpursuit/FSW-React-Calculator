import React from 'react';
import classNames from 'classnames'
import '../CSS/Button.css'
import '../CSS/Calculator.css'

const Button = ({name, value, onButtonClick}) => {

    let buttonClass = classNames(name, "button")

    return (
        <button className={buttonClass} name={name} value={value} onClick={onButtonClick}>{value}</button>
    )
}

export default Button