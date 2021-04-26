import './App.css';
import KeyLayout from './Components/KeyLayout';
import CalcDisplay from  './Components/CalcDisplay';

function App() {
  return (
    <div className="App">
      <div className="CalcBody">
        <CalcDisplay />
        <KeyLayout />
      </div>
    </div>
  );
}

export default App;
