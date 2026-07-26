import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import WhoThis from './WhoThis'
import WhatYouLearn from './WhatYouLearn'
import CourseHighlights from './CourseHighlights'
import WhoChoose from './WhoChoose'
import Benefits from './Benefits'
import StudentVoice from './StudentVoice'
import EnquiryNow from './EnquiryNow'
import AdvisorForm from './AdvisorForm'

const Homes = () => {
  return (
    <div>
      <Banner/>
      <Overview/>
      <WhoThis/>
      <EnquiryNow/>
      <WhatYouLearn/>
      <CourseHighlights/>
      <WhoChoose/>
      <Benefits/>
      <StudentVoice/>
      <AdvisorForm/>

    </div>
  )
}

export default Homes
