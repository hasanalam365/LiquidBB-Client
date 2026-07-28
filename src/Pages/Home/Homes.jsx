import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import WhyChooseIt from './WhyChooseIt'
import WhatYouLearn from './WhatYouLearn'
import CourseHighlights from './CourseHighlights'
import WhoChoose from './WhoChoose'
import Benefits from './Benefits'
import StudentVoice from './StudentVoice'
import EnquiryNow from './EnquiryNow'
import AdvisorForm from './AdvisorForm'
import WhoIsThis from './WhoIsThis'
import HowItWorks from './HowItWorks'
import ExpectedResult from './ExpectedResult'
import Welbeing from './Welbeing'
import FAQ from './FAQ'

const Homes = () => {
  return (
    <div>
      <Banner/>
      <Overview/>
      <WhyChooseIt/>
      <WhoIsThis/>
      <HowItWorks/>
      <ExpectedResult/>
      <Welbeing/>
      <FAQ/>
      {/* <EnquiryNow/>
      <WhatYouLearn/>
      <CourseHighlights/>
      <WhoChoose/>
      <Benefits/>
      <StudentVoice/>
      <AdvisorForm/> */}

    </div>
  )
}

export default Homes
