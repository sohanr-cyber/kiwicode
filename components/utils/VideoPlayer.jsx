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
          src='https://firebasestorage.googleapis.com/v0/b/lms-926e5.appspot.com/o/quince%2025fps%20480p.mp4?alt=media&token=b2a74abb-1edd-4f06-8b85-d41c98379898'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
