import React from 'react'
import {Navbar , Hero ,Partners ,Contact ,StarsCanvas,About , Faq} from './';
const Home = () => {
  return (
    <div className='relative z-0 bg-primary '>
       <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
       </div>
     
       <div className='relative z-0'>
       <About/>
       <Partners/>
          <Faq/>
         <Contact/>
         <StarsCanvas/>
       </div>
    </div>
  )
}

export default Home