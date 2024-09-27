import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
      <video
        controls
        width={480}
        style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
      >
        <source
          src='https://firebasestorage.googleapis.com/v0/b/lms-926e5.appspot.com/o/division%2Fquince-promo.mp4?alt=media&token=b3afef54-1d48-461a-8c7c-43792066be6b'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
