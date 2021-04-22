import React from "react"

const Grid = ({handleGrid})=>{
const nums = {
  allNums:  [1,2,3,4,5,6,7,8,9,0]
}



return(
    <div>
<ul>{nums.allNums.map((el,i)=>{
 return  <li key={i}>  
 
 <button onClick={() => handleGrid(el)}>  {el}   </button>
 

   
   </li>
})}

</ul>

    </div>
)






}
export default Grid;