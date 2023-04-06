import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import SubNavbarServices from './SubNavbarServices'

function Header() {
  return (
    <div>
      <SubNavbarServices />
     <Navbar />
     <Banner />
    </div>
  )
}

export default Header