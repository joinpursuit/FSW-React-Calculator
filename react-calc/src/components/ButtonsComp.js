import { Component } from "react";


class ButtonsComp extends Component{


     render() {
        return (
            <div className="button">
                <button name="C" >C</button>
                <button name="AC" >AC</button>
                <button name="%" >%</button>
                <button name="±" >±</button>
                <br/>


                <button name="1" >1</button>
                <button name="2" >2</button>
                <button name="3" >3</button>
                <button name="-" >-</button>
                <br/>


                <button name="4" >4</button>
                <button name="5" >5</button>
                <button name="6" >6</button>
                <button name="+" >+</button>
                <br/>

                <button name="7" >7</button>
                <button name="8" >8</button>
                <button name="9" >9</button>
                <button name="/" >÷</button>
                <br/>


                <button name="." >.</button>
                <button name="0" >0</button>
                <button name="=" >=</button>
                <button name="x" >x</button>
                <br/>
            </div>
        );
    }
}


export default ButtonsComp;