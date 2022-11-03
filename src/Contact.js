import React from 'react'
import Navbar2 from './Navbar2'

function Contact() {
  return (
    
    <>
    <Navbar2/>
  <div className='bg-bgpic-img2 h-full w-full'> 
  <div class="container px-24 py-24 mx-auto flex sm:flex-nowrap flex-auto ">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 shadow-2xl rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" title="map"  scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5895613721036!2d85.77445031439518!3d20.275850018430347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f9d486f7c3%3A0xde71ead59307dcca!2sOdisha%20University%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1667445125451!5m2!1sen!2sin" class="absolute inset-0"></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-lg font-sans">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
          <p class="mt-1">Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
          <a href="mailto:SpectraArtGallery@gmail.com" class="text-blue-700">SpectraArtGallery@gmail.com</a>
          <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
          <a href="tel:+919532XXXXXX" class="text-sm">9532XXXXXX</a>
        </div>
      </div>
    </div>
    <div class="shadow-2xl lg:w-1/2 md:w-1/2 bg-[#f8e9ca] bg-opacity-60 backdrop-blur-md flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 px-6 items-center rounded-lg" id="con" >
      <p class="text-black text-4xl mb-2 title-font text-center font-medium border-b-4 border-cyan-600">Contact Us</p>
      <p class="leading-relaxed mb-5 text-xl text-gray-600 text-center" id='tac'>We're open for any suggestion or just to have a chat!</p>
      <div class='px-6' id='tac'>
      <div class="relative mb-4 text-left">
        <label for="name" class="leading-7 text-xl text-black">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your Name" class="w-full bg-white rounded border border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 text-left">
        <label for="email" class="leading-7 text-xl text-black">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your Email" class="w-full bg-white rounded border border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 text-left">
        <label for="subject" class="leading-7 text-xl text-black">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Enter your Subject" class="w-full bg-white rounded border border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 text-left">
        <label for="message" class="leading-7 text-xl text-black">Message</label>
        <textarea id="message" name="message" placeholder="Enter your Message" class="w-full bg-white rounded border border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-lg outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-[#f0622a] border-0 py-2 px-6 focus:outline-none hover:bg-[#fc9d45] rounded text-lg">Send Message</button>
      <p class="text-sm text-gray-900 mt-3 text-left font-sans">By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
    </div>
    </div>
  </div></div> 

    </>
  )
}

export default Contact