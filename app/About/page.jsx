'use client'
import React from 'react'
import University from '@/components/Menabout/University'
import Header from '@/components/headerone/Main'
import Steps from '@/components/steps/steps'



import Campus from '@/components/Menabout/Campus'
import TrackRecord from "@/components/TrackRecord/TrackRecord"




function page() {
  return (
<>
        <Header/>
        {/* <Bredcom title="Home" subtitle="About Us"/> */}
        <University/>
        <Steps/>
        {/* <Scholarship/> */}
        {/* <Frequently/> */}
        <Campus/>
        <TrackRecord/>
  </>     

  )
}

export default page