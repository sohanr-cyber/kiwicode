import React from 'react'

const VideoPlayer = () => {
  return (
    <div>
      <video
        controls
        playsInline
        poster='./images/quince.png'
        width={480}
        style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
      >
        <source
          // src='https://dw.convertfiles.com/files/0738004001727443234/quince%2025fps%20480p.mp4'
          src='https://firebasestorage.googleapis.com/v0/b/lms-926e5.appspot.com/o/division%2Fquince%2025fps%20480p.mp4?alt=media&token=4b6e6c55-9e61-4b06-8aca-fe4fd9a8e3be'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default VideoPlayer
