import React from 'react'

export default function Operation({oper}) {
    return (
        <div>
           <button className="oper"value={oper}>{oper}</button> 
        </div>
    )
}
