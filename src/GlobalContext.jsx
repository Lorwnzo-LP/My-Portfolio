import { createContext, useState, useContext } from "react";
import connectToDatabase from "./mongodb";

const globalContext = createContext();

export function GlobalProvider({ children }) {
  const [globalLanguage, setGlobalLanguage] = useState("English");
  const [globalProjects, setGlobalProjects] = useState(connectToDatabase());

  return (
    <globalContext.Provider value={{ globalLanguage, setGlobalLanguage }}>
      {children}
    </globalContext.Provider>
  );
}

export const useGlobal = () => useContext(globalContext);
