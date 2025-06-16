import { createContext, useState, useContext } from "react";

const globalContext = createContext();

export function GlobalProvider({children}){
    const [globalLanguage, setGlobalLanguage] = useState("English");

    return (
        <globalContext.Provider value = {{globalLanguage, setGlobalLanguage}}>
            {children}
        </globalContext.Provider>
    );
}

export const useGlobal = () => useContext(globalContext);