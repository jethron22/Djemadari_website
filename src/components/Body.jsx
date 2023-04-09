import React from 'react'
import BannerBody from './BannerBody'
import HowWeWork from './HowWeWork'
import Popularis from './Popular'

function Body() {
  return (
    <div>
        
          <div>
              <BannerBody />
              <div className='mt-28'>
              <Popularis />
              </div>
              <HowWeWork />
          </div>
        
    </div>
  )
}

export default Body