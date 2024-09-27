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
        <source
          src='https://dw.convertfiles.com/files/0738004001727443234/quince%2025fps%20480p.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
