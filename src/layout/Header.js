import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
          <Link to="/favourites">Favourites</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
