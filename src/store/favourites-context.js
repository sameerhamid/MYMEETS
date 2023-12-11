import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
})



const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState({})

  const context = {
    favorites: favorites,
    totalFavorites: favorites.lentht,
  }



  return <FavouriteContext.Provider value={context}>
    {children}
  </FavouriteContext.Provider>
}

export default FavoriteContextProvider