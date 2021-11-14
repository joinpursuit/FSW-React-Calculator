import "./App.css";

function App() {

const makeNumberButtons = () => {
  const numberButtons = [];
  for(let i =1; i<10; i++){
    numberButtons.push(
      <button key={i}>{i}</button>
    )
  }
  return numberButtons
}

  return (
    <div className="App">
      <div className="calc-container">
        <div className="calc-display"> 
        Calc Display
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>Delete</button>
        </div>
        <div className="numberButtons">
          { makeNumberButtons() }
        </div>
      </div>
    </div>
  );
}

export default App;
