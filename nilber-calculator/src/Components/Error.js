import React from 'react';


const Error = ({className, message}) => {
    return (
        <p className={className}>{message}</p>
    )
        
};

export default Error;