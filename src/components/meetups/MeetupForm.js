import React, { useRef, } from 'react'


const MeetupForm = ({ onAddMeetup }) => {
  const titleRef = useRef("");
  const imageRef = useRef("");
  const addressRef = useRef("");
  const descRef = useRef("");



  const handleSubmit = (e) => {
    e.preventDefault()

    const meetupItem = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value
    }

    onAddMeetup(meetupItem)

    titleRef.current.value = ""
    imageRef.current.value = ""
    addressRef.current.value = ""
    descRef.current.value = ""
  }


  return (<>
    <form className='my_form' onSubmit={handleSubmit}>
      <div className="control">
        <label htmlFor='title'>Meetup Title:</label>
        <input type="text" id='title' required ref={titleRef} />
      </div>
      <div className="control">
        <label htmlFor='image'>Meetup Image Url:</label>
        <input type="url" id='image' required ref={imageRef} />
      </div>
      <div className="control">
        <label htmlFor='address'>Address :</label>
        <input type='text' id='adddress' required ref={addressRef} />
      </div>
      <div className="control">
        <label htmlFor='description'>Description :</label>
        <textarea id='description' required rows='5' ref={descRef} />
      </div>
      <div className='button'>
        <button className='btn_primary'>Add to Favourite</button>
      </div>

    </form >
  </>

  )
}

export default MeetupForm
