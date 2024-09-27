import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
      <video
        controls
        playsInline
        width={480}
        style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
      >
        <source src='ad/promo.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoPlayer
