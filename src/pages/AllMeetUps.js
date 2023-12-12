import React, { useEffect, useState } from 'react'
import MeetupList from '../components/meetups/MeetupList'
import Loading from '../components/ui/Loading'


const AllMeetUps = () => {
  const [meetupData, setMeetupData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://my-meetups-b3217-default-rtdb.firebaseio.com/meetups.json'
    ).then(res => res.json()).then(data => {
      const meetups = []
      for (let key in data) {
        const meetup = {
          id: key, ...data[key],
        }
        meetups.push(meetup)
      }
      setMeetupData(meetups);
      setLoading(false)
    })
  }, [])
  return (
    <div className='allMeetupContainer'>
      <h1 className='heading'>All Meetups</h1>
      {loading ? <Loading /> : <MeetupList meetups={meetupData} />}



    </div>
  )
}

export default AllMeetUps
