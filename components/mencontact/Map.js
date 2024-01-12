import React from 'react'

function Map() {
  return (
    <>
        <div className="map fix" style={{ background: "#f5f5f5" }}>
            <div className="container-flud">
                <div className="row">
                <div className="col-lg-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8520110653276!2d36.78206807372738!3d-1.2610372355964474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17dd0e2fdecd%3A0xfbfc2315a2aad0f2!2sAFEX%20Hub%20Ltd%2CKenya-%20Study%20abroad!5e0!3m2!1sen!2ske!4v1703086044950!5m2!1sen!2ske" width={600} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Map
