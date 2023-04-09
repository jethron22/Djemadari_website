import React, { useState, useEffect } from 'react';
import etudiantesouriante from '../../src/assets/etudiantesouriante.png';

function Banner() {
  const [bgColor, setBgColor] = useState('#040438');

  useEffect(() => {
    const timer = setTimeout(() => {
      const newColor = Math.random() > 0.5 ? '#f7f748' : '#e2e208';
      setBgColor(newColor);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <div  className='' style={{ backgroundColor: bgColor }}>
      <div className='flex w-full p-10 bg-[#040438]'>
        <div className='flex flex-column mt-52 flex-wrap w-3/6'>
          <div className='ml-10'>
            <p className='text-4xl text-white'>
              Rencontrez un Freelance pour réaliser votre prochain Job !
            </p>
            <p className='mt-5 text-gray-300 '>
              Sur Djemadari, nous avons un catalogue complet des personnes capables d'effectuer vos taches, selon vos besoins!
            </p>
            <span className='flex items-center gap-10 mt-5 w-full'>
              <button className='bg-[#040438] border-[#e2e208] border-2 text-[#f7f748] font-semibold p-3 w-60'>
                Trouver un freelance
              </button>
              <h3 className='mt-2 text-1xl cursor-pointer text-gray-400'> 🎮 Voir la Video</h3>
            </span>
          </div>
        </div>
        <span className='ml-20 mt-32'>
          <img src={etudiantesouriante} alt='etudiante souriante' />
        </span>
      </div>
      </div>
    </div>
  );
}

export default Banner;