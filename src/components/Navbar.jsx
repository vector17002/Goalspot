import React, {useState , useEffect } from 'react'
import {Link} from 'react-router-dom';
import {styles} from '../styles'
import {logo} from '../assets/index';
const Navbar = () => {
  const[active,setActive] = useState("");
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
     <Link to='/' className='flex items-center gap-2' onClick={()=>{
      setActive("");
      window.scrollTo(0,0);
     }}>
        <img src={logo} alt='logo' className='w-30 h-12'/>
     </Link>
     <ul className='list-none hidden sm:flex flex-row gap-10'>
      <li key='#about' className={`${active === 'About' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive('About')}><a href='#about'>About</a></li>
      <li key='#courses' className={`${active === 'Courses' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive('Courses')}><a href='#courses'>Courses</a></li>
      <li key='#partners' className={`${active === 'Partners' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive('Partners')}><a href='#partners'>Partners</a></li>
      <li key='#faq' className={`${active === 'Faq' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>
        setActive('Faq')
      }><a href='#faq'>FAQ</a></li>
      <li key='#contact' className={`${active === 'Contact' ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>
        setActive('Contact')
      }><a href='#contact'>Contact</a></li>
     </ul>
     <button type='button'
      className='bg-[#915eff] flex justify-center px-4 py-2 rounded-xl hover:bg-white text-white font-bold hover:text-[#915eff]'>Login</button>
    </div>
    </nav>
  )
}

export default Navbar