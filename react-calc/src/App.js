import { Component } from 'react';
import './App.css';

class App extends Component{
  
  render(){




  return (
    <div className="texasInstrument">
      <div className="calc">

      <div className="allDisplay">
        <div className="disp">
          0
        </div>
      <div className="operators">
          
          <button> / </button>
          <button> * </button>
          <button> + </button>
          <button> - </button>
          
          

       </div>
     <div className="numbers">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>=</button>
          
          
          
          <button>4</button>
          <button>5</button>
          <button>6</button>


          <button>1</button>
          <button>2</button>
          <button>3</button>

          <button>0</button>
          <button>.</button>
          <button>C</button>


        </div>
      </div>  

      </div>
   

    </div>
  );
 }
}

export default App;
