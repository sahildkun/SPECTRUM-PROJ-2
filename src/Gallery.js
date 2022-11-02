import React, { useState } from 'react'
import { gallery } from './Data'
import Navbar2 from './Navbar2';

function Gallery() {

  const [art, setArt] = useState(gallery);
  return (
    <>
    <Navbar2/>
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