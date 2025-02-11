import logo from './logo.svg';
import './App.css';
import Header from './components/props';
import PropsDrillingA from './components/PropsDrillingA';


function App() {
  const name = "fayyazurrehman";
  return (
    <div className="App">
      {/* <Header name="Fayyazurrehman" age="18" />
      <Header name="AdnanChouhan" age="22" /> */}

      <PropsDrillingA name={name}/>

    </div>
  );
}

export default App;
