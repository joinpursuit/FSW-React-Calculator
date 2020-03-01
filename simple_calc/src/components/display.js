import React from "react";

const Display = ({display}) => {
    
    return (
        <div className="calculator-screen">
            <p>{Number(display).toLocaleString()}</p>
        </div>
    )
}

export default Display;