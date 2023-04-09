import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popular from '../assets/data/Popular'
import './Popular.css'
import { useEffect } from 'react';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

function Popularis() {

       const settings = {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <NextArrow  />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

    return (
        <div className='Popular-card'>
            <p className='text-4xl font-semibold mb-8'>Service les plus demandés : </p>
            <Slider {...settings}>
                {Popular.map((item, index) => (
                    <div key={index} className='card' >
                        <div className='card-top'>
                            <img src={item.image} alt="image du service" />
                            <h4 className='text-[20px] font-semibold'>{item.category}</h4>
                            <div className='card-bottom'>
                                <span className='border-b border-green-700 pb-7'>{item.description}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Popularis

