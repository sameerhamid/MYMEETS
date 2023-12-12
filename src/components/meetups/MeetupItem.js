import React, { useContext, } from 'react'
import { FavouriteContext } from '../../store/favourites-context';

const MeetupItem = ({ item }) => {
  const { context } = useContext(FavouriteContext);
  const { addFavoriteHandler, removeFavoriteHandler, itemIsFavoriteHandler, deleteMeetupHandler } = context
  const isFavorite = itemIsFavoriteHandler(item.id)

  return (
    <div className='meetup_item_container'>
      <img src={item?.image} alt={item?.title} />
      <div className='meetup_item_body'>
        <div className="title">{item?.title}</div>
        <div className='address'>
          {item?.address}
        </div>
        <div className="description">
          {item?.description}
        </div>
        <div className='button'>
          {isFavorite ? <button onClick={() => removeFavoriteHandler(item.id)} className='btn_secondary'>Remove From Favourite</button> : <button className="btn_primary" onClick={() => addFavoriteHandler(item)}>Add to Favourite</button>}
          {
            isFavorite ? null : <button className='btn_delete' onClick={() => { deleteMeetupHandler(item.id) }}>
              Delete Meetup
            </button>
          }

        </div>
      </div>
    </div >
  )
}

export default MeetupItem
