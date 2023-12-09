import React from 'react'
import MeetupItem from './MeetupItem'

const MeetupList = ({ meetups }) => {
  return (
    <div className='meetup_list_container'>
      {meetups.map(meetup => <MeetupItem item={meetup} key={meetup.id} />)}
    </div>
  )
}

export default MeetupList
