import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const GlobalContext = createContext();

// Provider component
export function GlobalProvider({ children }) {
  // Initialize state from localStorage or default to "English"
  const [globalLanguage, setGlobalLanguage] = useState(() => {
    return localStorage.getItem("language") || "English";
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", globalLanguage);
  }, [globalLanguage]);

  return (
    <GlobalContext.Provider value={{ globalLanguage, setGlobalLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook to access the context
export const useGlobal = () => useContext(GlobalContext);
