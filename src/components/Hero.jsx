import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { Typewriter } from 'react-simple-typewriter'
const Hero = () => {
  return (
    <section className='relative w-full h-screen m-auto '>
    <div className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-auto`}>
       <div className='flex flex-col justify-center items-center mt-5 '>
        <div className='w-10 h-10 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm:h-80 h-58 violet-gradient'/>
       </div>
       <div className='flex flex-col justify-between gap-40 mx-0'>
       <div>
         <h1 className={`${styles.heroHeadText} text-white`}>Goal<span className='text-[#915eff]'>Spot</span></h1>
         <p className={`${styles.heroSubText} text-white-100`}>Learn without <span className='text-[#915eff]'>uncertainity</span></p>
        </div>
        <div className='mx-0 text-5xl text-[#915eff] font-bold'>
        <span className='text-white'>Learn </span>
          <Typewriter
            words={["Adeptly" , "Limitless" ]}
            typeSpeed={200}
            deleteSpeed={50}
            loop={false}
          />
         </div>
       </div>
       <div className='ml-56'>
       <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_sy6mqjxk.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
       </div>
    </div>
   <div className='absolute xs:bottom-10 bottom-32 flex justify-center items-center w-full'>
        <a href='#about'><div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
         <motion.div 
           animate={{
             y:[0,24,0]
           }}
           transition={{
             duration:1.5,
             repeat:Infinity,
             repeatType: 'loop'
           }}
           className="w-3 h-3 rounded-full bg-secondary mb-1"
         />
        </div></a>
    </div>
</section>
  )
}

export default Hero