import React from "react"

const Equal = ({first,second,mod,handleEqual})=>{


const finalEqual = {
first:first,
mod:mod,
second:second

}






    return(
        <div>
            <button onClick={()=> handleEqual(finalEqual)}>EQUAL</button>
        </div>
    )



}
export default Equal