import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
const DUMMY_DATA = [
  {
    id: 0,
    title: 'this is the first meetup',
    imgUrl: "https://images.pexels.com/photos/11121334/pexels-photo-11121334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This is a first,amaging meetup whih you definitly should not miss. "
  },
  {
    id: 1,
    title: 'this is the second meetup',
    imgUrl: "https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg",
    description: "This is a first,amaging meetup whih you definitly should not miss. "
  },
  {
    id: 2,
    title: 'this is the third meetup',
    imgUrl: "https://images.pexels.com/photos/11121334/pexels-photo-11121334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This is a first,amaging meetup whih you definitly should not miss. "
  },



]
const AllMeetUps = () => {
  return (
    <div className='allMeetupContainer'>
      <h1 className='heading'>All Meetups</h1>

      <MeetupList meetups={DUMMY_DATA} />
    </div>
  )
}

export default AllMeetUps
