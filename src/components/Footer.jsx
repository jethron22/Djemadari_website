import React from 'react'
import logo_djemadari2 from '../assets/logo_djemadari2.png'


function Footer() {
  return (
    <div>


<footer className="footer p-10 bg-gray-300 text-base-content">
  <div>
    <span className='flex  h-20 w-100'>
    <img src={logo_djemadari2} />
    </span>
 
    <p>Djemadari DRC-Goma<br/>Providing reliable tech since 2023</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Branding</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Design</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Marketing</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="text-black hover:text-blue-900 cursor-pointer">About us</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Contact</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Jobs</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Terms of use</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Privacy policy</a> 
    <a className="text-black hover:text-blue-900 cursor-pointer">Cookie policy</a>
  </div>
</footer>


    </div>
  )
}

export default Footer