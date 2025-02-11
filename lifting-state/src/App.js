import './App.css';
import Childe from './Components/Childe';

function App() {
  function getData(data) {
    console.log(data)
  }
  return (
    <div className="App">
      <Childe getData={getData} />
    </div>
  );
}

export default App;