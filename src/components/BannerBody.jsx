import React from 'react'

function BannerBody() {
  return (
    <div>
       <div className="stats shadow w-full">
  <div className="stat place-items-center">
    <div className="stat-title">Freelances</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Depuis janvier 2023 jusqu'en Mai 2023</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Projets</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Clients</div>
    <div className="stat-value">+ 1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  )
}

export default BannerBody