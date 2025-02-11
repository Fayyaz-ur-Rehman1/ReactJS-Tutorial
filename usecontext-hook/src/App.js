import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext()
export const UserSkills = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Fayyazurrehman"}>

        <UserSkills.Provider value={"FullStack Dev"}>
          <ComponentC />
        </UserSkills.Provider>

      </UserContext.Provider>
    </div>
  );
}

export default App;
