import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (

    // style the navbar jyoti and shuva accordingly cuz it will be in every page
    <div className='bg-white p-5 border drop-shadow-lg'>
    <div className='flex flex-row mx-auto text-xl space-x-10'>

      {/* logo goes here */}
    <Link to="/">
     {/* add any tag like img or div inside here  */}
     LOGO 
    </Link>

     <div className='flex flex-auto  space-x-10'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact us</Link>
        
        

        </div>
    


    </div>

    </div>
  )
}

export default Navbar