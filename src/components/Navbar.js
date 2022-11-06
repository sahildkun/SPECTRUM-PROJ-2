import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className='bg-transparent fixed backdrop-blur-lg w-full lg:h-20'>
    {/* NAVBAR */}
    <nav class="relative container mx-auto p-0.5">
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
         <Link to="/"><div class ="text-xl ml-5 text-white hover:text-[#34d1c4] cursor-pointer  hover:underline duration-1000" id="tol">HOME</div></Link>
         <Link to="/about"><div class ="text-xl text-white hover:text-[#34d1c4] cursor-pointer  hover:underline duration-1000" id="tol">ABOUT US</div></Link>
         <Link to="/gallery"><div class ="text-xl text-white hover:text-[#34d1c4] cursor-pointer  hover:underline duration-1000" id="tol">GALLERY</div></Link>
         <Link to="/contact"><div class ="text-xl text-white hover:text-[#34d1c4] cursor-pointer  hover:underline duration-1000" id="tol">CONTACT US</div></Link>
           
         </div>

         </div>
    </nav>
 </div>

  )
}

export default Navbar