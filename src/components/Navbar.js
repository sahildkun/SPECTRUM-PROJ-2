import React from 'react'
import '../App.css';

function Navbar() {
  return (
    <div class=" bg-bgpic-img bg-no-repeat bg-center bg-cover bg-fixed  h-[650px] ">
    <div class="flex flex-auto  space-x-10 pt-[30px] pl-[15px]">
        <div class ="text-2xl  text-[#ffb7c5] cursor-pointer  hover:underline duration-1000" id="tol">HOME</div>
        <div class ="text-2xl  text-[#ffb7c5] cursor-pointer  hover:underline duration-1000" id="tol">ABOUT US</div>
        <div class ="text-2xl  text-[#ffb7c5] cursor-pointer  hover:underline duration-1000" id="tol">GALLERY</div>
        <div class ="text-2xl  text-[#ffb7c5] cursor-pointer  hover:underline duration-1000" id="tol">CONTACT US</div>
     </div>
     <div class="flex space-x-16 justify-center items-center h-[600px] ">
    <hr class="w-40"/>
    <p class="text-[#ffb7c5] text-6xl" id="isl">SPECTRA ART GALLERY</p>
    <hr class="w-40"/>
    </div>
</div>

  )
}

export default Navbar