import React from 'react'
import Header from '../../headerone/Main'
import Bredcom from '../../Bredcom/Main'
import Brand from '../../menhomethree/Brand'
import First from '../menevent/First'
import LandingLayout from '../../../LandingLayout'

function page() {
  return (
    <LandingLayout>
        <Header/>
        <Bredcom title="Home" subtitle="Our Event"/>
        <First/>
        <Brand/>
    </LandingLayout>
  )
}

export default page;