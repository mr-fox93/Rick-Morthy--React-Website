import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  return (
    <GlobalContext.Provider
      value={{ favorite, setFavorite, isFavorite, setIsFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
