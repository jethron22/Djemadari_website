import React from 'react'

function BannerBody() {
  return (
    <div>
      <div className="flex bg-slate-100 stats w-full">
        <div className="stat place-items-center">
          <div className="stat-title">Freelances</div>
          <div className="stat-value">31K</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Projets</div>
          <div className="stat-value">4,200</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Clients</div>
          <div className="stat-value">+ 1,200</div>
        </div>

      </div>
    </div>
  )
}

export default BannerBody