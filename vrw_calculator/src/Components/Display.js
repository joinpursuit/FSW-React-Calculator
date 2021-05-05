//function - just displaying the total, updating the effects of numbers & operators

import React from "react";

const Display = (props) => {
    const {total} = props;
 render() {
     return (
         <div>
             <h3>{total}</h3>
         </div>
     )
 };
}

export default Display;