import React from 'react';
import Results from './Results'

class Calculator extends React.Component{

    render(){
        return(
            <div className="Calculator">
                <Results/>
            <div className="Buttons">
<div>

<button className="Others">AC</button> 
<button>7</button>
<button>4</button>
<button>1</button>
</div>
<div>

<button className="Others">+/-</button>
<button>8</button>
<button>5</button>
<button>3</button>
</div>
<div>
<button className="Others">%</button>
<button>9</button>
<button>6</button>
<button>2</button>
</div>
<div>

<button className="Operators">÷</button>
<button className="Operators">x</button>
<button className="Operators">-</button>
<button className="Operators">+</button> 
</div>
<button className="Zero" >0</button>
<button >.</button>
<button className="Equal">=</button>
<div>

</div>
               
             
            </div>
            </div>
           
        )
    }
}

export default Calculator;