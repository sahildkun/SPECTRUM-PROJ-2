import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
  <div className='relative'>
    <div class='absolute inset-0 bg-black rounded-lg blur-xl opacity-75'></div>  
    <div className='relative w-full bg-gradient-to-r from-[#011a36] via-[#515cfc] to-[#011a36]'>
      {/* NAVBAR */}
      <nav class="relative container mx-auto p-2">
        {/* FLEX CONTAINER */}
          <div class="flex items-center justify-between">
              {/* logo */}
            <div className='py-0.5 w-28 mx-auto lg:mx-5'>
            <Link to='/'>
            <img src="logo.png" alt="logo-img"/>
            </Link>
                
            </div>
            {/* menu */}
          <div class="hidden items-center md:flex flex-auto space-x-12">
          <Link to="/"><div class ="text-2xl ml-5 text-white hover:text-[#3af0f0] cursor-pointer  hover:underline duration-1000" id="tol">HOME</div></Link>
          <Link to="/about"><div class ="text-2xl text-white hover:text-[#3af0f0] cursor-pointer  hover:underline duration-1000" id="tol">ABOUT US</div></Link>
          <Link to="/gallery"><div class ="text-2xl text-white hover:text-[#3af0f0] cursor-pointer  hover:underline duration-1000" id="tol">GALLERY</div></Link>
          <Link to="/contact"><div class ="text-2xl text-white hover:text-[#3af0f0] cursor-pointer  hover:underline duration-1000" id="tol">CONTACT US</div></Link>
            
          </div>

          </div>
      </nav>
    </div>
  </div>  

  )
}

export default Navbar2
