import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div className="App">
      <Dice numDice={6} title="Main Dice Game" maxVal={6} />
      <Dice title="Secondary Dice Game" />
    </div>
  );
}

export default App;
