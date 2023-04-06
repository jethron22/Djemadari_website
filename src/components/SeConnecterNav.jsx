import React from 'react'
import {useNavigate} from 'react-router-dom'

function SeConnecterNav() {
    const navigate = useNavigate()
    const handlerNavigate =()=> {
      navigate('/auth')
    }
  return (
    <div>
           <h4 className='cursor-pointer duration-300 text-white  hover:text-[#e2e208]' onClick={()=> {
              handlerNavigate()
            }}>Se connecter</h4>
    </div>
  )
}

export default SeConnecterNav