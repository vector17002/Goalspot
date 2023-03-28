import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeIn } from './motion'
import SimpleImageSlider from "react-simple-image-slider"

const Card = ({image , index , prompt}) => {
  const [key, setKey] = useState("");
  const handleRoute=({index})=>{
    console.log(index)
  }
  return (
    <motion.div
    variants={fadeIn("right","spring",0.75*index,0.75)}>
    <Link href='/courses'>
    <div className="product-card">
    <div className='product-image'>
    <SimpleImageSlider
        width={300}
        height={300}
        images={image}
        bgColor='transparent'
        autoPlay={true}
        loop={true}
        onClick={(idx)=>{handleRoute(idx)}}
    />
    </div>
    </div>
    </Link>
   </motion.div>
  )
}

export default Card