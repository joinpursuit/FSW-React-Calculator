import React from 'react';
import Results from './Results'

class Calculator extends React.Component{

    render(){
        return(
            <div className="Calculator">
                <Results/>
                
    <br></br>

<button className="others">AC</button> 
<button className="others">+/-</button>
<button className="others">%</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button className="operators">÷</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button className="operators">x</button>

<button>1</button>
<button>2</button>
<button>3</button>
<button className="operators">-</button>
<button >0</button>
<button >.</button>
<button className="equal">=</button>
<button className="operators">+</button> 
               
             
            </div>
        )
    }
}

export default Calculator;