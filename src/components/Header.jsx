import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import SubNavbarServices from './SubNavbarServices'

function Header() {
  return (
    <div>
     
     <Navbar />
     <Banner />
     <div>
     <SubNavbarServices />
     </div>
    </div>
  )
}

export default Header