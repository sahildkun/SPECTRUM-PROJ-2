import React, { useState } from 'react'
import { gallery } from './Data'
import Navbar2 from './Navbar2';

function Gallery() {

  const [art, setArt] = useState(gallery);

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

    <div className='text-4xl text-center my-20'>
      GALLERY 
    </div>

    <div className='flex flex-row justify-center space-x-10 mb-10'>
      <button className='border-2 p-3 bg-black text-white' onClick={()=> filterItem('oil')}>OIL</button>
      <button className='border-2 p-3 bg-black text-white' onClick={()=> filterItem('water')}>WATER</button>
      <button className='border-2 p-3 bg-black text-white'onClick={()=> filterItem('dark')}>DARK</button>
      <button className='border-2 p-3 bg-black text-white'onClick={()=> setArt(gallery)}>All</button>
      
    </div>


    <div className='grid grid-cols-4 gap-3'>
    {
      art.map((elem)=>{

        return(  
          <>
          <div className='flex flex-col gap-x-10'>
          <img src={elem.image} alt="" className='h-96' />
          
          <p>{elem.artist}</p>
          <p>{elem.description}</p>
          </div>
          </>
        )
      })
    }
    </div>

    
    
    </>
  )
}

export default Gallery