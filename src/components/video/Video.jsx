import React from 'react'
import "./videoStyle.scss"

const Video = ({src}) => {
  return (
    <div className='video__container'>
        <video width={400} loop autoPlay muted>
            <source src={src} />
        </video>
    </div>
  )
}

export default Video