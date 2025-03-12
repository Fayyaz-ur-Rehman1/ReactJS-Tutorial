import './App.css';
import { Hoc, Hoc2, Hoc3 } from './Components/';
import { Counter } from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Hoc cmp={Counter} />
      <Hoc2 cmp={Counter} />
      <Hoc3 cmp={Counter} />
    </div>
  );
}

export default App;