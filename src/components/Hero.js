import React from 'react'
import '../App.css';
 import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; 

function Hero() {
  return (
    <div class="bg-gradient-to-r from-[#7472f3] via-[#bbbff7] to-[#7472f3] mx-0 my-auto max-w-full ">

        <div class="bg-bgpic-img h-[650px] ">
             <div class="flex space-x-16 justify-center items-center h-[600px] ">
            <hr class="w-40 bg-black h-0.5"/>
            <p class="text-black text-6xl" id="isl">SPECTRA ART GALLERY</p>
            <hr class="w-40 bg-black h-0.5"/>
            </div>
        </div>
            <div class="flex justify-center text-[#7e0d8d] italic text-3xl pt-[100px]">Exhibition Highlights</div>
            <div class="flex justify-center items-center space-x-12">
                <hr class="w-32 bg-[#383737] h-0.5"/>
                <p class="text-[#353434] text-5xl py-6 font-serif font-light">CURRENTLY ON VIEW</p>
                <hr class="w-32  bg-[#383737] h-0.5"/>
            </div>
            <div class="flex justify-center ">
                <p class="w-[700px] text-center text-lg font-light" id='nic'>Presenting contemporary art, historical books and photographs, charts, and scientific visualizations, our exhibition considers the powerful role of vision and the visual in exploring celestial realms.</p>
            </div>
            <br></br><br></br><br></br>

            <div class="bg-[#cac7f3] border-[4px] border-[#7e0d8d] rounded-xl shadow-2xl shadow-slate-800 pb-[13px] pt-[35px]  ml-[200px] mr-[200px] ">
                <div class="flex justify-start items-center pb-28">
                    <hr class="w-[250px] bg-[#7e0d8d] h-1"/>
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/eiffel-tower-paris-watercolor-mata.jpg " class="h-[500px] outline-double outline-8 outline-[#7e0d8d] rounded-md transform transition-all hover:scale-110" alt="Painting"/>
                    <div class="mx-6 text-center  text-3xl"><FormatQuoteIcon/><p class="w-[700px] text-center font-light font-serif text-[#7e0d8d] italic pl-5">Art is not what you see but what you make others see.</p>
                    <p class="w-[700px] text-center text-lg font-light  font-serif text-[#7e0d8d] italic pl-5">- Edgar Degas</p></div>
                </div> 
                <div class="flex justify-start items-center pb-28">
                    <hr class="w-[250px] bg-[#7e0d8d] h-1"/>
                    <img src="https://i.pinimg.com/originals/5e/13/2f/5e132f1d3188a8f856e2017dade17b59.jpg" class="h-[500px] outline-double outline-8 outline-[#7e0d8d] rounded-md transform transition-all hover:scale-110" alt="Painting"/>
                    <div class="mx-6 text-center  text-3xl"><FormatQuoteIcon/><p class="w-[700px] text-center font-light font-serif text-[#7e0d8d] italic pl-5">Paintings have a life of their own that derives from the painter's soul.</p>
                    <p class="w-[700px] text-center text-lg font-light  font-serif text-[#7e0d8d] italic pl-5">- Vincent Van Gogh</p></div>
                </div> 
                <div class="flex justify-start items-center pb-28">
                    <hr class="w-[250px] bg-[#7e0d8d] h-1"/>
                    <img src="https://media.fuzia.com/assets/uploads/images/co_brand_1/article/2020/unnamed-1599818866.png" class="h-[500px] outline-double outline-8 outline-[#7e0d8d] rounded-md transform transition-all hover:scale-110" alt="Painting"/>
                    <div class="mx-3 text-center  text-3xl"><FormatQuoteIcon/><p class="w-[700px] text-center font-light font-serif text-[#7e0d8d] italic pl-5">Painting is a blind man's profession.</p><p class="w-[700px] text-center text-3xl font-light font-serif text-[#7e0d8d] italic pl-5">He paints not what he sees, but what he feels, what he tells himself about what he has seen.</p>
                    <p class="w-[700px] text-center text-lg font-light  font-serif text-[#7e0d8d] italic pl-5">- Pablo Picasso</p></div>
                </div> 
                <div class="flex justify-start items-center  pb-10">
                    <hr class="w-[250px] bg-[#7e0d8d] h-1"/>
                    <img src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/303/5861/Modern130__45818__63914.1506573857.jpg?c=" class="h-[500px] outline-double outline-8 outline-[#7e0d8d] rounded-md transform transition-all hover:scale-110" alt="Painting"/>
                    <div class="mx-6 text-center  text-3xl"><FormatQuoteIcon/><p class="w-[700px] text-center font-light font-serif text-[#7e0d8d] italic pl-5">There is nothing more artistic than to love people.</p>
                    <p class="w-[700px] text-center text-lg font-light  font-serif text-[#7e0d8d] italic pl-5">- Vincent Van Gogh</p></div>
                </div> 
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
    </div> 
        
        
    
  )
}

export default Hero
