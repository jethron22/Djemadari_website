import React, { useState, useEffect } from 'react';
import logo_djemadari2 from '../assets/logo_djemadari2.png'
import Programation from './metiers/Programation';
import MarketingDigital from './metiers/MarketingDigital';
import RedacteurWeb from './metiers/RedacteurWeb';
import SearchBar from './SearchBar';
import GraphismeEtDesign from '../components/metiers/GraphismeEtDesign'
import Photographie from './metiers/Photograhie';

function SubNavbarServices() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-4 px-8 transition-all duration-300 ${visible ? 'bg-white bg-opacity-100 opacity-100' : 'bg-transparent opacity-0'
                }`}
        >
            <div className='flex gap-10'>
                <div className='flex h-12 '>
                    <img src={logo_djemadari2} />
                </div>
                <span>
                    <SearchBar />
                </span>
            </div>
            <div className='border-t border-gray-300'>
                <ul className="flex space-x-4 mt-3">
                    <li>
                        <Photographie />
                    </li>
                    <li>
                        <GraphismeEtDesign />
                    </li>
                    <li>
                        <MarketingDigital />
                    </li>
                    <li>
                        <Programation />
                    </li>
                    <li>
                        <RedacteurWeb />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SubNavbarServices
