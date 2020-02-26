import React from 'react';
import '../src/App.css'
import Calculator from './Components/Calculator'
// import Screen from './Components/Screen'

function App(){
  return (

<div className="App">
  calculator app
  <Calculator/>
{/* <Screen/> */}
<button>1</button>
<button>2</button>
<button>3</button>
<button>4</button>
<button>5</button>
<button>6</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button className="operators">+</button>
<button className="operators">-</button>
<button className="operators">x</button>
<button className="operators">÷</button>
<button className="others">AC</button>
<button className="others">+/-</button>
<button className="others">%</button>
</div>

  )
}
export default App;
