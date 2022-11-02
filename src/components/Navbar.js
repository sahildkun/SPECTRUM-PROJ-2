import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div class="bg-bgpic-img bg-no-repeat bg-center bg-cover bg-fixed h-[650px]">
    <div class="flex flex-auto space-x-12 pl-[15px] py-7 bg-transparent w-full fixed backdrop-blur-2xl">
      <Link to="/"><div class ="text-2xl hover:animate-[bounce_2s_ease-in-out_2]  text-white hover:text-[#83f1e8] cursor-pointer  hover:underline duration-1000" id="tol">HOME</div></Link>
      <Link to="/about"><div class ="text-2xl hover:animate-[bounce_2s_ease-in-out_2] text-white hover:text-[#83f1e8] cursor-pointer  hover:underline duration-1000" id="tol">ABOUT US</div></Link>
      <Link to="/gallery"><div class ="text-2xl hover:animate-[bounce_2s_ease-in-out_2] text-white hover:text-[#83f1e8] cursor-pointer  hover:underline duration-1000" id="tol">GALLERY</div></Link>
      <Link to="/contact"><div class ="text-2xl hover:animate-[bounce_2s_ease-in-out_2] text-white hover:text-[#83f1e8] cursor-pointer  hover:underline duration-1000" id="tol">CONTACT US</div></Link>
     </div>
     <div class="flex space-x-16 justify-center items-center h-[600px] ">
    <hr class="w-40"/>
    <p class="text-white text-6xl" id="isl">SPECTRA ART GALLERY</p>
    <hr class="w-40"/>
    </div>
</div>

  )
}

export default Navbar