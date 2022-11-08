import React, { useState } from 'react'
import { gallery } from './Data'
import CancelIcon from '@mui/icons-material/Cancel';
import './Sahil.css'
import Navbar2 from './Navbar2';

function Gallery() {

  const [art, setArt] = useState(gallery);
   
  const [modal, setModal] = useState([]);
  const [content,setContent] = useState(false)

  const changeContent = (elem) => {
    setModal(elem);
    setContent(!content);
  }

   const filterItem = (categ) => {
    const updateList = gallery.filter((elem)=>{
      return elem.category === categ;
    })

    setArt(updateList);
     
   }
  return (
    <>
    <Navbar2/>
    {/* intro */}
    <div class='bg-gradient-to-r from-[#7472f3] via-[#bbbff7] to-[#7472f3] '>
      <div class="flex justify-center items-center space-x-12 py-24">
          <hr class="w-32 bg-[#383838] h-0.5"/>
          <p class="text-[#383838] text-5xl py-6 font-serif font-light">GALLERY</p>
          <hr class="w-32 bg-[#383838] h-0.5"/>
      </div>

      <div className='flex flex-row justify-center space-x-8 mb-10' id='nic'>
        <p class="text-[#525252] text-xl py-3 font-light"id='nic'>CATAGORIES :</p>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Watercolour')}>WATERCOLOUR</button>
        <button id='ran'className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Acrylic')}>ACRYLIC</button>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl'onClick={()=> filterItem('Dark')}>DARK</button>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Sketch')}>SKETCH</button>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Digital')}>DIGITAL</button>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Modern')}>MODERN</button>
        <button id='ran' className='border-2 p-3 bg-black text-white rounded-3xl' onClick={()=> filterItem('Abstract')}>ABSTRACT</button>
        <button id='ran' className='border-2 py-3 px-5 bg-black text-white rounded-3xl'onClick={()=> setArt(gallery)}>ALL</button>
        
      </div>

        
      <div className='grid grid-cols-4 gap-4 mx-9 pb-44'>
      {
        art.map((elem)=>{

          return(  
            <>
            <div className='flex flex-col gap-x-10 '>
            <button onClick={()=>{ changeContent([elem])}}>
            <img src={elem.image} alt="" className='h-96 w-full rounded-lg border-[#606061]' />
            </button>
            
            {/* <p>{elem.artist}</p>
            <p>{elem.description}</p> */}
            </div>
            </>
          )
        })
      }
      </div>

      {/* popUp Container */}

      { content && 
      
      <div onClick={changeContent}   className='fixed top-0 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-30 bg-black z-10 backdrop-blur-sm '>
      <div className='bg-white p-10 rounded-lg max-w-2xl z-50 relative'>
        <div className=''>
          <div className='flex flex-auto justify-end'>
        <button onClick={changeContent} className="pb-10"><CancelIcon style={{ color: "red" }}/></button>
        </div>
          {
            modal.map((pop) => {

              return(
                <>
              <img src={pop.image} alt="" className='pb-10 w-full h-96' />
              <h2 className='font-bold'>ARTIST :  {pop.artist}</h2>
              <h2>{pop.description}</h2>
              </>
              )
            })
          }

        </div>

        </div>
        </div>}

    </div>
    
    </>
  )
}

export default Gallery