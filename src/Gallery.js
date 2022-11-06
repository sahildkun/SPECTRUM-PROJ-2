import React, { useState } from 'react'
import { gallery } from './Data'

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
          <button onClick={()=>{ changeContent([elem])}}>
          <img src={elem.image} alt="" className='h-96' />
          </button>
          
          <p>{elem.artist}</p>
          <p>{elem.description}</p>
          </div>
          </>
        )
      })
    }
    </div>

    {/* popUp Container */}

    { content && 
    
    <div onClick={changeContent}   className='fixed top-0 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-25 bg-black z-10'>
    <div className='bg-white p-10 rounded-lg max-w-2xl z-50 relative'>
      <button onClick={changeContent} className="bg-yellow-500">x</button>
        {
          modal.map((pop) => {

            return(
              <>
            <h1>{pop.id}</h1>
            <h1>{pop.artist}</h1>
            <h1>{pop.description}</h1>
            </>
            )
          })
        }

      </div>


    </div>}

    
    
    </>
  )
}

export default Gallery