import React from 'react'
import Footer from './components/Footer'
import './App.css';
import Navbar2 from './Navbar2';

function About() {
  return (
    <>
    <Navbar2/>
    <div>
      {/* animesh and ajit  */}
      <div class="bg-white  mx-0 my-auto max-w-full ">

<div style="background-image: url('https://images5.alphacoders.com/116/1166049.jpg');"
    class="bg-no-repeat bg-center bg-cover bg-fixed  h-[650px] flex space-x-16 justify-center items-center">
    <hr class="w-40 "/>
    <p class="text-white text-6xl font-serif">ABOUT US</p>
    <hr class="w-40"/>
</div>
<div class="min-h-max bg-transparent z-10 pt-32" data-parallax="scroll" data-image-src="background.png">
    <div class="flex justify-center text-[#c9ab81] italic text-3xl">About our house</div>
    <div class="flex justify-center items-center space-x-12">
        <hr class="w-32 bg-[#525252] h-0.5"/>
        <p class="text-[#525252] text-5xl py-6 font-serif font-light">THE MUSEUM</p>
        <hr class="w-32  bg-[#525252] h-0.5"/>
    </div>
    <div class="flex justify-center ">
        <p class="w-[700px] text-center text-lg font-light">Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Beatae, vero. Deserunt id veritatis voluptates laboriosam.elit. Beatae, vero. Deserunt i
            Beatae, vero. Deserunt id ve</p>
    </div>
</div>
<div class="px-14 py-16 flex space-x-32">
    <div class="w-[45%] text-base font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        se eiusmod temps esmu incididun in ut labs en ore et sa dolore si magna aliqua. Ut enim ad minima
        veniam, inant quis nostrud e exerci de tation ullam co laboris nisi ut sen aliquip ex ea commodo insade
        consequat. Duis aute irure do se dolor in reprehenderit inest
    </div>
    <div>
        <div class="flex space-x-3 px-5">
            <a href="https://musea.qodeinteractive.com/about-us/#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-4 mt-1">
                    <path
                        d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                </svg>
            </a>
            <a href="https://musea.qodeinteractive.com/about-us/#" target="_blank"
                class="text-[20px] font-serif font-light hover:text-[#c9ab81] duration-200 text-[#525252]">OPENING HOURS</a>
        </div>
        <ul class="p-4 ml-5">
            <li class="font-light">Tue ‒ Thu: 09am ‒ 07pm</li>
            <li class="font-light">Tue ‒ Thu: 09am ‒ 07pm</li>
        </ul>
    </div>
    <div>
        <div class="flex space-x-3 px-5">
            <a href="https://musea.qodeinteractive.com/about-us/#" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 mt-1">
                    <path
                        d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
            </a>
            <a href="https://musea.qodeinteractive.com/about-us/#" target="_blank"
                class="text-[20px] font-serif font-light hover:text-[#c9ab81] duration-200 text-[#525252]">ADMISSIONS</a>
        </div>
        <ul class="p-4 ml-5">
            <li class="font-light">Aduts: $25</li>
            <li class="font-light">Children and Students: free</li>
        </ul>
    </div>
</div>
<div class="px-14 flex justify-between">
    <div class="flex flex-row justify-around">
    </div>
</div>
</div> 

      




    
    
    
    
    
    
    
    
    </div>
   <Footer/>
    </>
  )
}

export default About