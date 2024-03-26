import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map-responsive'> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851980624824!2d36.782074409866844!3d-1.261057098721623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176181a8ef2b%3A0x74a8f71af09b3253!2sWestcom%20Point!5e0!3m2!1sen!2ske!4v1711412658163!5m2!1sen!2ske" 
        width="600" 
        height="450"
        title='Responsive Google Map'
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

          </iframe>
    </div>
  )
}

export default Map