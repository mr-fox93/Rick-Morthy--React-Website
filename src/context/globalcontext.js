import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  return (
    <GlobalContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
};
