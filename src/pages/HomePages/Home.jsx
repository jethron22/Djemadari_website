import React from 'react'
import Body from '../../components/Body'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div>
        <Header />
        <Body />
         
        <div className='mt-28'>
        <Footer />
        </div>
        
    </div>
  )
}

export default Home