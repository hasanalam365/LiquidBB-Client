import React from 'react'
import Banner from './Banner'
import Benefits from './Benefits'
import EnquiryNow from './EnquiryNow'
import AdvisorForm from './AdvisorForm'
import HowItWorks from './HowItWorks'
import ExpectedResult from './ExpectedResult'
import FAQ from './FAQ'
import UnderstandingYou from './UnderstandingYou'
import IntroducingTheSolution from './IntroducingTheSolution'
import Suitability from './Suitability'
import RecoveryLooks from './RecoveryLooks'
import YourSafety from './YourSafety'
import BeforeAfterVideo from './BeforeAfterVideo'
import PageNavButtons from '../../Shared/PageNavButtons/PageNavButtons'

const Homes = () => {

  const isHomePage=true

  

  return (
    <div>
      <Banner/>
      <UnderstandingYou/>
      <IntroducingTheSolution/>
      <Benefits/>
      <BeforeAfterVideo/>
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
      
      
     
      <AdvisorForm/> 
<PageNavButtons isHomePage={isHomePage}/>
    </div>
  )
}

export default Homes
