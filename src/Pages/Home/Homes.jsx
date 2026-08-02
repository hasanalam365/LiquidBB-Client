import React from 'react'
import Banner from './Banner'
import WhyChooseIt from './WhyChooseIt'
import WhoChoose from './WhoChoose'
import Benefits from './Benefits'
import StudentVoice from './StudentVoice'
import EnquiryNow from './EnquiryNow'
import AdvisorForm from './AdvisorForm'
import WhoIsThis from './WhoIsThis'
import HowItWorks from './HowItWorks'
import ExpectedResult from './ExpectedResult'
import FAQ from './FAQ'
import UnderstandingYou from './UnderstandingYou'
import IntroducingTheSolution from './IntroducingTheSolution'
import Suitability from './Suitability'
import RecoveryLooks from './RecoveryLooks'
import YourSafety from './YourSafety'

const Homes = () => {
  return (
    <div>
      <Banner/>
      <UnderstandingYou/>
      <IntroducingTheSolution/>
      <Benefits/>
      <Suitability/>
       <EnquiryNow/> 
  
      {/* <WhyChooseIt/> */}
      {/* <WhoIsThis/> */}
       <HowItWorks/>
       <ExpectedResult/> 
       <RecoveryLooks/>
       <EnquiryNow/> 
      <YourSafety/>
      <FAQ/>
      
      
      {/* <WhoChoose/> */}
      {/* <Benefits/>
      <StudentVoice/> */}
      <AdvisorForm/> 

    </div>
  )
}

export default Homes
