import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='loadder_container'>
      <CirclesWithBar
        height="200"
        width="200"
        color="teal"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="teal"
        innerCircleColor="teal"
        barColor=""
        ariaLabel='circles-with-bar-loading'
      />
    </div>
  )
}

export default Loading
