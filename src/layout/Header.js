import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { FavouriteContext } from '../store/favourites-context';


const Header = () => {
  const { context } = useContext(FavouriteContext)
  const { totalFavorites } = context
  console.log(totalFavorites);
  return (
    <div className='header_wrapper'>
      <div className='name'>React Meetups</div>
      <div className="links">
        <div>
          <Link to='/'>All Meetups</Link>
        </div>
        <div>
          <Link to="/new-meetup">Add New Meetups</Link>
        </div>
        <div>
          <Badge badgeContent={totalFavorites} color="primary">
            <Link to="/favourites">Favourites</Link>
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header
