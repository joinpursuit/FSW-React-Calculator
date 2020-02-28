import React from 'react';
import Results from './Results'

class Calculator extends React.Component{
    state = {
        display: 0
    }
    buttonValue(event){
        let {value} = event.target
        let {display} = this.state

    }

    render(){
        return(
            <div className="Calculator">
                <Results/>
            <div className="Buttons">
<div>

<button className="Others">AC</button> 
<button value = "7">7</button>
<button value = "4 ">4</button>
<button value = "1 ">1</button>
<button className="Zero" >0</button>
</div>
<div>

<button className="Others">+/-</button>
<button value = "8 ">8</button>
<button value = "5 ">5</button>
<button value = "3 ">3</button>
</div>
<div>
<button className="Others">%</button>
<button value = "9 ">9</button>
<button value = "6">6</button>
<button value = "2 ">2</button>
<button >.</button>
</div>
<div>

<button className="Operators">÷</button>
<button className="Operators">x</button>
<button className="Operators">-</button>
<button className="Operators">+</button> 
    <div>
<button className="Equal">=</button>

    </div>
</div>


<div>

</div>
               
             
            </div>
            </div>
           
        )
    }
}

export default Calculator;