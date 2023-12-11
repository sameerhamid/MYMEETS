import React from 'react'
import MeetupForm from '../components/meetups/MeetupForm'
import { useNavigate } from 'react-router-dom'

const NewMeetUps = () => {
  const navigate = useNavigate("")

  const onAddMeetup = (meetup) => {
    console.log({ meetup });

    fetch('https://my-meetups-b3217-default-rtdb.firebaseio.com/meetups.json',
      {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(meetup)
      }
    ).then(data => {
      console.log({ data });
      navigate("/")
    })
  }
  return (
    <div className='new_meetup_form_conainer'>
      <h1 className="heading">
        NewMeetUps
      </h1>
      <MeetupForm onAddMeetup={onAddMeetup} />
    </div>
  )
}

export default NewMeetUps