import React from 'react'

const Cover = () => {
  return (
    <div className='cover_container'>
        <video className='video' autoPlay loop muted rate={3.0}>
            <source src='/covervideo2.mp4' type="video/mp4"/>
        </video>
        {/*<h1>GEOMATICA</h1>
        <p>GIS | GNSS | AI | MDE</p>*/}
    </div>
  )
}

export default Cover