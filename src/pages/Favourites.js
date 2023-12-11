import React, { useContext, useEffect, useState } from 'react'
import Loading from '../components/ui/Loading'
import MeetupList from '../components/meetups/MeetupList'
import { FavouriteContext } from '../store/favourites-context'

const Favourites = () => {
  const { context } = useContext(FavouriteContext)
  const { favorites } = context;
  console.log({ favorites });
  const [myFavorites, setMyFavorites] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://my-meetups-b3217-default-rtdb.firebaseio.com/favorites.json'
    ).then(res => res.json()).then(data => {
      const meetups = []
      for (let key in data) {
        const meetup = {
          id: key, ...data[key]
        }
        meetups.push(meetup)
      }
      setMyFavorites(meetups);
      setLoading(false)

    })
  }, [favorites])
  return (
    <div>
      <h1 className='heading'>Favorites</h1>
      {loading ? <Loading /> : <MeetupList meetups={myFavorites} />}
    </div>
  )
}

export default Favourites
