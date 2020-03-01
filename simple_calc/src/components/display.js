import React from "react";

const Display = ({display}) => {
    
    return (
        <div className="calculator-screen">
            <p>{display}</p>
        </div>
    )
}

export default Display;