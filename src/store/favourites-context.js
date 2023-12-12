import { createContext, useEffect, useReducer, useState } from "react";


export const FavouriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteHandler: () => { },
  removeFavoriteHandler: () => { },
  itemIsFavoriteHandler: () => { },
  deleteMeetupHandler: () => { }
})


const meetupReducer = (state, action) => {
  let favoriteMeets = state;
  if (action.type === "ADD") {

    fetch('https://my-meetups-b3217-default-rtdb.firebaseio.com/favorites.json',
      {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(action.payload.meetup)
      }
    ).then(data => {
      console.log(data);

      window.location.reload()
    })
  } else if (action.type === "INITIAL_POSTS") {
    favoriteMeets = action.meetups
  } else if (action.type === "REMOVE_FAV") {
    let myKey = "";
    for (let key in state) {
      if (state[key].id === action.payload.meetupId) {
        myKey = key;
      }
    }

    fetch(`https://my-meetups-b3217-default-rtdb.firebaseio.com/favorites/${myKey}.json`, {
      method: "DELETE",
    })
      .then(data => {
        console.log(data, " delete successful");
        window.location.reload()
      })
  } else if (action.type === 'DELETE') {
    fetch(`https://my-meetups-b3217-default-rtdb.firebaseio.com/meetups/${action.payload.meetupId}.json`, {
      method: "DELETE",
    })
      .then(data => {
        console.log(data, " delete successful");
        window.location.reload()
      })
  }
  return favoriteMeets
}

const FavoriteContextProvider = ({ children }) => {
  const [favorites, dispatchFavorites] = useReducer(meetupReducer, [])
  const [loading, setLoading] = useState(false)

  // add favorite function

  const addFavoriteHandler = (meetup) => {
    console.log({ meetup });
    let addMeetupAction = {
      type: 'ADD',
      payload: {
        meetup,

      }
    }
    dispatchFavorites(addMeetupAction);
  }

  // add favorite function

  const removeFavoriteHandler = (meetupId) => {
    let removeFavAction = {
      type: 'REMOVE_FAV',
      payload: {
        meetupId
      }
    }
    dispatchFavorites(removeFavAction);
  }

  const deleteMeetupHandler = (meetupId) => {
    let deleteMeetupAction = {
      type: 'DELETE',
      payload: {
        meetupId
      }
    }
    dispatchFavorites(deleteMeetupAction);
  }

  const itemIsFavoriteHandler = (meetupId) => {
    let isFav = false;
    for (let key in favorites) {
      if (favorites[key].id === meetupId) {
        isFav = true;
      }
    }
    return isFav
  }

  const addIntialItems = (meetups) => {

    let initialItemsAction = {
      type: "INITIAL_POSTS",
      meetups,
    }
    dispatchFavorites(initialItemsAction)
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://my-meetups-b3217-default-rtdb.firebaseio.com/favorites.json'
    ).then(res => res.json()).then(data => {

      addIntialItems(data);
      setLoading(false)
    })

  }, [])

  const totalFav = () => {
    let count = 0;
    for (let key in favorites) {
      console.log(key);
      count += 1
    }
    return count
  }

  const context = {
    favorites: favorites,
    totalFavorites: totalFav(),
    addFavoriteHandler,
    loading,
    removeFavoriteHandler,
    itemIsFavoriteHandler,
    deleteMeetupHandler
  }



  return <FavouriteContext.Provider value={{ context }}>
    {children}
  </FavouriteContext.Provider>
}

export default FavoriteContextProvider