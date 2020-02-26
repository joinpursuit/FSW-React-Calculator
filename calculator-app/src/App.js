import React from 'react';
import '../src/App.css'
import Calculator from './Components/Calculator'
// import Screen from './Components/Screen'

function App(){
  return (

<div className="App">
  calculator app
  {/* <Calculator/> */}
{/* <Screen/> */}
<button className="others">AC</button>
<button className="others">+/-</button>
<button className="others">%</button>
<button className="operators">÷</button>
<button>1</button>
<button>2</button>
<button>3</button>
<button className="operators">x</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button className="operators">-</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button className="operators">+</button>
<button >0</button>
<button >.</button>
<button className="equal">=</button>




</div>

  )
}
export default App;
