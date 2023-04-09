import React from 'react'

function Programmation() {
  return (
    <div>
      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <label tabIndex={0} className=" cursor-pointer hover:text-green-600 text-black">
          Programmation
        </label>
        <ul tabIndex={0} className="flex dropdown-content mt-1 bg-white p-2 shadow rounded-box w-[700px] h-[500px]">
          <div className="flex flex-col ">
            <div className='flex justify-center'>
              <div className="flex flex-rows w-full ml-5 ">
                <div className='flex flex-col border-r border-gray-400 w-52'>
                  <p className="font-bold"> Creation des sites web </p>
                  <ul className="py-2">
                    <li className="cursor-pointer hover:text-green-800">Wordpress</li>
                    <li className="cursor-pointer hover:text-green-800">Shopify</li>
                    <li className="cursor-pointer hover:text-green-800">Wix</li>
                    <li className="cursor-pointer hover:text-green-800">Drupal</li>
                    <li className="cursor-pointer hover:text-green-800">Joomla</li>
                    <li className="cursor-pointer hover:text-green-800">Woocommerce</li>

                  </ul>
                </div>
                <div className='flex flex-col border-r border-gray-400 ml-5'>
                  <div className='flex flex-col w-52'>
                    <p className="font-bold">Frontend From Scratch</p>
                    <ul className="py-2">
                      <li className="cursor-pointer hover:text-green-800">HTML5 & CSS3</li>
                      <li className="cursor-pointer hover:text-green-800">Javascript & HTML5 & CSS3</li>
                      <li className="cursor-pointer hover:text-green-800">React</li>

                    </ul>
                  </div>
                </div>
                <div className='flex flex-col '>
                  <div className='flex-col ml-5 w-52'>
                    <p className='font-bold'>Backend From scratch</p>
                    <ul className='py-2'>
                      <li className="cursor-pointer hover:text-green-800">NodeJS</li>
                      <li className="cursor-pointer hover:text-green-800">PHP/Laravel</li>
                      <li className="cursor-pointer hover:text-green-800">Django</li>
                      <li className="cursor-pointer hover:text-green-800">Ruby on rails</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <div className='flex justify-center'>
                <div className="flex flex-rows w-full ml-5 ">
                  <div className='flex flex-col border-r border-gray-400 w-52'>
                    <p className="font-bold">Maintenance des sites web</p>
                    <ul className="py-2">
                      <li className="cursor-pointer hover:text-green-800">Bug Fixing</li>
                      <li className="cursor-pointer hover:text-green-800">Consultation</li>
                      <li className="cursor-pointer hover:text-green-800">Sécurité</li>
                      <li className="cursor-pointer hover:text-green-800">Tests</li>
                      <li className="cursor-pointer hover:text-green-800">Hebergement</li>
                    </ul>
                  </div>
                  <div className='flex flex-col border-r border-gray-400 ml-5'>
                    <div className='flex flex-col w-52'>
                      <p className="font-bold">Photographie</p>
                      <ul className="py-2">
                        <li className="cursor-pointer hover:text-green-800">Stratégie Marketing</li>
                        <li className="cursor-pointer hover:text-green-800">Conseil Marketing</li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-col '>
                    <div className='flex-col ml-5 w-52'>
                      <p className='font-bold'>Technique & Methodes</p>
                      <ul className='py-2'>
                        <li className="cursor-pointer hover:text-green-800">SMS marketing</li>
                        <li className="cursor-pointer hover:text-green-800">Marketing e-commerce</li>
                        <li className="cursor-pointer hover:text-green-800">Videos Marketing (youtube)</li>
                        <li className="cursor-pointer hover:text-green-800">Marketing d'affiliation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className='flex justify-center'>
                <div className="flex flex-rows w-full ml-5 ">
                  <div className='flex flex-col border-r border-gray-400 w-52'>
                    <p className="font-bold">Stratégie Analyse</p>
                    <ul className="py-2">
                      <li className="cursor-pointer hover:text-green-800">Stratégie Marketing</li>
                      <li className="cursor-pointer hover:text-green-800">Conseil Marketing</li>

                    </ul>
                  </div>
                  <div className='flex flex-col border-r border-gray-400 ml-5'>
                    <div className='flex flex-col w-52'>
                      <p className="font-bold">Réseaux Sociaux</p>
                      <ul className="py-2">
                        <li className="cursor-pointer hover:text-green-800">Whats'app marketing</li>
                        <li className="cursor-pointer hover:text-green-800">Community management</li>
                        <li className="cursor-pointer hover:text-green-800">Marketing d'influence</li>
                      </ul>
                    </div>
                  </div>
                  <div className='flex flex-col '>
                    <div className='flex-col ml-5 w-52'>
                      <p className='font-bold'>Référencement web</p>
                      <ul className='py-2'>
                        <li className='cursor-pointer hover:text-green-800'>SEO des site e-commerce</li>
                        <li className='cursor-pointer hover:text-green-800'>SEM (search engine marketing)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Programmation