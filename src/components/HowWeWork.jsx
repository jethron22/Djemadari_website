import React from 'react'
import djemadari_pres from '../assets/djemadari_pres.mp4'
import { Performance } from '../assets/data/Performance'
function HowWeWork() {
    return (
        <div className='mt-28'>
            <div className='flex m-10 justify-between'>

                <div className='flex flex-col flex-wrap'>
                    {Performance.map((item, index) => (
                        <div key={index} className='flex w-[450px] flex-col'>
                            <div className=''>
                                <p className='flex text-3xl font-semibold '>{item.title}</p>
                                <p className='flex gap-2 text-2xl mt-5'><span className='items-center mt-1'>{item.icon}</span><span className='items-center'>{item.Sub_title}</span></p>
                                <p className=''>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <span>
                    <video src={djemadari_pres} width="650" height="500" controls></video>
                </span>

            </div>

        </div>
    )
}

export default HowWeWork