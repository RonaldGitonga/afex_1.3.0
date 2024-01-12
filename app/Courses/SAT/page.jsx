'use client'


import Header from '@/components/headerone/Main'
import Third from '@/components/mencoursedetails/Third'







//get course by id../


function page() {
  // const {updateSAT}=useContext(AnalyticsContext);
  // //log page visits
  // useEffect(() => {
  //   // This will run when the component mounts (representing a page visit)
  // updateSAT()
  // }, []);


  return (
<>
        <Header/>
        {/* <Bredcom title="Courses" subtitle="SAT Prep" /> */}
        <Third/>
        
    </>
  )
}

export default page;