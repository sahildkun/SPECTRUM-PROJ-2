import React from 'react'
import '../App.css';
import Slider from './Slider.js'
function Hero() {
  return (
    <div class="bg-[#f6e4bc]  mx-0 my-auto max-w-full ">

        <div class="bg-bgpic-img bg-no-repeat bg-center bg-cover   h-[650px] ">
             <div class="flex space-x-16 justify-center items-center h-[600px] ">
            <hr class="w-40 "/>
            <p class="text-white text-6xl" id="isl">SPECTRA ART GALLERY</p>
            <hr class="w-40"/>
            </div>
        </div>
        <div class="min-h-max bg-transparent z-10 pt-32" data-parallax="scroll" data-image-src="background.png">
            <div class="flex justify-center text-[#fdc449] italic text-3xl">Exhibition highlights</div>
            <div class="flex justify-center items-center space-x-12">
                <hr class="w-32 bg-[#525252] h-0.5"/>
                <p class="text-[#525252] text-5xl py-6 font-serif font-light">CURRENTLY ON VIEW</p>
                <hr class="w-32  bg-[#525252] h-0.5"/>
            </div>
            <div class="flex justify-center ">
                <p class="w-[700px] text-center text-lg font-light">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Beatae, vero. Deserunt id veritatis voluptates laboriosam.elit. Beatae, vero. Deserunt i
                    Beatae, vero. Deserunt id ve</p>
            </div>
            
        
        </div>
    </div>
  )
}

export default Hero
