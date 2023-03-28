import React from 'react';
import { Carousel } from 'react-carousel3';
import {udemy,codingninjas, codingblocks, unstop, hb , internshala} from '../assets/partners'
import { SectionWrapper } from '../hoc';
const style = {
  width: 300,
  height: 300,
};

const Partners = () => (
  <div className='flex flex-col justify-between items-center bg-transparent h-full mt-[-6rem]'>
  <div className='flex justify-center items-center'>
       <p className='text-[50px] font-bold text-white'>Our<span className='text-[#915eff]'> Partners </span></p>
  </div>
  <div className='flex justify-center items-center mt-[90px]'>
    <Carousel  height={400}  xRadius={500} yRadius={100} xOrigin={0} autoPlay={true}>
      <div key={1} style={style}>
        <img alt="" src={codingninjas} />
      </div>
      <div key={2} style={style}>
        <img alt="" src={udemy} />
      </div>
      <div key={3} style={style}>
        <img alt="" src={codingblocks} />
      </div>
      <div key={4} style={style}>
        <img alt="" src={hb} />
      </div>
      <div key={5} style={{width:'400px' , height:'400px'}}>
        <img alt="" src={internshala} />
      </div>
    </Carousel>
    </div>
  </div>
);
export default SectionWrapper(Partners,'partners')