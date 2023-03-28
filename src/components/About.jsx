import React from 'react'
import {styles} from '../styles'
import { SectionWrapper} from '../hoc'
import {motion} from 'framer-motion'
import { slideIn } from '../utils/motion'
import Card from '../utils/Card'
import {dsa , python , java ,  mern, ai, react, cpp} from '../assets'
const img1 = [
  { url: dsa},
  { url: java},
  {url: cpp},
];
const img2 = [
  { url: python},
  { url: ai},
];
const img3 = [
  { url: mern},
  { url: react},
];

const About = () => {
  return (
    <motion.div 
    variants={slideIn('left','tween',0.2,1)}
    className='relative w-full h-screen'>
      <h1 className={`${styles.heroHeadText} text-white`}>A broad selection of <span className='text-[#915eff]'>courses...</span> </h1>
      <p className={`${styles.heroSubText} text-white`}>Select the best from thousands of courses online</p>
      <div className='mt-20 flex flex-row justify-between'>
       <Card image={img1} index={1}/>
       <Card image={img2} index={2}/>
       <Card image={img3} index={3}/>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(About ,"about");