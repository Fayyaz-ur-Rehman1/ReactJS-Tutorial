import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Fayyazurrehman",
    age: 18,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };