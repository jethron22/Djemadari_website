import React from 'react'

import etudiantesouriante from '../../src/assets/etudiantesouriante.png'

function Banner() {
    return (
        <div className=''>
            <div className='flex bg-[#040438] w-full p-10'>
                <div className='flex flex-column mt-52 flex-wrap w-3/6'>
                    <div className='ml-10'>
                    <p className='text-4xl text-white'> Rencontrez un Freelance pour réaliser votre prochain Job !</p>
                    <p className='mt-5 text-gray-300 '>Sur Djemadari, nous avons un catalogue complet des personnes capables d'effectuer vos taches, selon vos besoins!</p>
                    <span className='flex items-center gap-10 mt-5 w-full'>
                        <button className=' bg-[#040438] border-[#e2e208] border-2 text-[#f7f748] font-semibold p-3 w-60'>
                            Trouver un freelance
                        </button>
                        <h3 className='mt-2 text-1xl cursor-pointer  text-gray-400'> 🎮 Voir la Video</h3>
                    </span>
                    </div>
                </div>
                <span className='ml-20 mt-32'><img src={etudiantesouriante} /></span>
            </div>
        </div>
    )
}

export default Banner