import React from 'react'

const MeetupItem = ({ item }) => {
  return (
    <div className='meetup_item_container'>
      <img src={item?.imgUrl} alt={item?.title} />
      <div className='meetup_item_body'>
        <div className="title">{item?.title}</div>
        <div className='address'>
          ahdhd hgfhh hgh
        </div>
        <div className="description">
          {item?.description}
        </div>
        <div className='button'>
          <button>Add to Favourite</button></div>
      </div>
    </div >
  )
}

export default MeetupItem
