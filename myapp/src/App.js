// import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import NameList from './components/NameList';
import InlineStyle from './components/inline';
import './appStyle.css';
import styles from './appStyle.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.success}>Success</h1>
      <h1 className="error">Error</h1>
      {/* < InlineStyle /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
    </div>
  );
}

export default App;
