import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  render(){

    return (
      <main className="App">
        <section id="calculator-container">
          <section id="display-screen">  default 0  </section>
          <section id="display-buttons"> 
            
            <div id="button"> AC </div>
            <div id="button"> +/- </div>
            <div id="button"> % </div>
            <div id="button"> / </div>
            <div id="button"> 7 </div>
            <div id="button"> 8 </div>
            <div id="button"> 9 </div>
            <div id="button"> X </div>
            <div id="button"> 4 </div>
            <div id="button"> 5 </div>
            <div id="button"> 6 </div>
            <div id="button"> - </div>
            <div id="button"> 1 </div>
            <div id="button"> 2 </div>
            <div id="button"> 3 </div>
            <div id="button"> + </div>
            <div id="button" className=".last"> 0 </div>
            <div id="button"> . </div>
            <div id="button"> = </div>
          </section>
        </section>
      </main>
    );
  }
}



export default App;
