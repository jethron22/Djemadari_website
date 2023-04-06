import React from 'react'
import logo_djemadari from '../assets/logo_djemadari.png'
import { useState, useEffect } from 'react'
import Freelancers from './Freelancers'
import Commandes from './Commandes'
import PresterUnService from './PresterUnService'
import SeConnecterNav from './SeConnecterNav'
import SinscrireNav from './SinscrireNav'

function Navbar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', handlerScroll);

    return () => {
      window.removeEventListener('scroll', handlerScroll);
    }
  }, [])

  return (
    <div>
      <div className={`flex fixed justify-between w-full p-2 bg-[#040438]   border-b border-gray-600 transition-all duration-200 ${visible ? "" : "translate-y-full opacity-0 pointer-events-none"}`}>
        <span className='flex text-3xl text-white items-center ml-5 font-semibold hover:text-[#e2e208] cursor-pointer duration-300'>
          <span className='flex h-20'>
            <img src={logo_djemadari} alt='logo djemadari' />
          </span>
          <div className='flex justify-center'>

          </div>

        </span>
        <div className='flex items-center'>
        </div>
        <span className='item-center mt-2'>
        </span>
        <span className='flex gap-10 text-black text-1xl items-center mr-20'>

          <span className='cursor-pointer'>
            <Freelancers />
          </span>
          <span className='cursor-pointer'>
           <Commandes />
          </span>

          <span className='cursor-pointer'>
           <PresterUnService />
          </span>

          <span className='cursor-pointer'>
         <SeConnecterNav />
          </span>

          <span className='cursor-pointer'>
          <SinscrireNav />
          </span>

        </span>
      </div>
     </div>

  )
}

export default Navbar