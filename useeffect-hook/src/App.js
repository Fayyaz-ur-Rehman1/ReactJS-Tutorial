import './App.css';
import HookCounterOne from './Components/CounterOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalCounter from './Components/IntervalCounter';
import DataFetching from './Components/DataFetching';
import DataFetchingTwo from './Components/DataFetchingTwo';
function App() {
  return (
    <div className="App">
      {/* <DataFetching /> */}
      <DataFetchingTwo />
      {/* // <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalCounter /> */}
    </div>
  );
}

export default App;