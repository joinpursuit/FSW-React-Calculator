import React, { useState, useEffect } from 'react'
import Keyboard from './Keyboard'
import * as math from 'mathjs'

const DisplayCalculator = ({values, solution}) => {

    const [ display, setDisplay ] = useState([])

    
    // useEffect(() => {
    //     if (!solution) {
    //         setDisplay(values)
    //     } else {
    //         setDisplay(null)
    //         setDisplay(solution)
    //     }
    // }, [values])

        return (
            <div>
            <input type="text"></input>  
            <Keyboard />          
            </div>
        )

}

export default DisplayCalculator;