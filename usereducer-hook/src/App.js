import './App.css';
import Counter from './Components/Counter';
import CounterComplex from './Components/Counter-Complex';
import DataFetchWithReducer from './Components/FetchDataUseReducer';
import FetchData from './Components/FetchDataUseState';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterComplex /> */}
      {/* <FetchData /> */}
      <DataFetchWithReducer />
    </div>
  );
}

export default App;
