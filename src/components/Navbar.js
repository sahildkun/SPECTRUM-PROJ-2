import React from 'react'
import '../App.css';
import { Link ,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    
    <div className='bg-black bg-opacity-20 fixed  backdrop-filter backdrop-blur-lg w-full lg:h-20'>
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
         <NavLink to="/"><div class ="text-xl ml-5 hover:text-[#fdc751] text-[#f5f8f8] cursor-pointer  hover:underline duration-1000" id="tol">HOME</div></NavLink>
         <Link to="/about"><div class ="text-xl hover:text-[#fdc751]  text-[#f5f8f8] cursor-pointer  hover:underline duration-1000" id="tol">ABOUT US</div></Link>
         <Link to="/gallery"><div class ="text-xl hover:text-[#fdc751]  text-[#f5f8f8] cursor-pointer  hover:underline duration-1000" id="tol">GALLERY</div></Link>
         <Link to="/contact"><div class ="text-xl hover:text-[#fdc751]  text-[#f5f8f8] cursor-pointer  hover:underline duration-1000" id="tol">CONTACT US</div></Link>
           
         </div>

         </div>
    </nav>
 </div>

  )
}

export default Navbar