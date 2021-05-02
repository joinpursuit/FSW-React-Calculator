import React from 'react';

// const isOperator = val => {
//     return !isNaN(val) || val === '.' || val === '=';
// }

const Button = ({icon, handleClick}) => {
    return (
        <button onClick={() => handleClick({icon})}>{icon}</button>
    )
}

export default Button;