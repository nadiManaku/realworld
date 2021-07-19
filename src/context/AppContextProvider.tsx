import React, { useState, useCallback } from "react";
import { IPerfomance } from "../pages/TestDataPerformance";
import AppContext from "./AppContext";


interface IAppContextProviderProps {
  children: React.ReactChild
}

const AppContextProvider = ({ children }: IAppContextProviderProps) => {

  const [items, setItems] = useState<IPerfomance | {}>({});

  const wrappedSetItems = useCallback((item: IPerfomance) => {
    setItems(item);
  }, []);

  return (
    <AppContext.Provider value={{ items, setItems: wrappedSetItems }}>
      {children}
    </AppContext.Provider>
  )

}

export default AppContextProvider;