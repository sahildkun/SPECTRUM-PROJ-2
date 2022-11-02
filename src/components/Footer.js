import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
      {/* jyoti  */}
      <footer class="text-gray-600 body-font bg-black">
  <div class="container px-6 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <div class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <div>
              <Link to='/'>
              <img src="spectra.jpeg" alt="logo-img" />
              </Link>
                  
             </div>
      </div>
      <p class="mt-2 text-xl text-white text-center">NEWSLETTER</p>
          <label for="footer-field" class="leading-7 text-sm text-white text-justify">Never Miss Out On a Moment With Us!</label>
          <input type="text" id="footer-field" name="footer-field" placeholder="Enter your email" class="w-full bg-white rounded border border-slate-600 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white text-serif py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          <button class="lg:mt-2 xl:mt-3 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none transition duration-500 hover:scale-110 hover:bg-indigo-600  rounded">SUBSCRIBE</button>
    </div>
    <div class="flex-grow flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-10 lg:text-center text-center">
      <div class="lg:w-full md:w-1/2 w-full px-4 py-3">
        <div class="title-font font-medium text-white tracking-widest text-2xl mb-3 pt-3 ">SPECTRA ART GALLERY</div>
        <p className='text-gray-400 text-md'>Spectra art gallery is home to some of the finest collections of Asian art, boasting more than 1,000 awe-inspiring artworks ranging from ancient jades and ceramics to contemporary video installations. Dynamic special exhibitions, cultural celebrations and public programs for all ages provide rich art experiences that unlock the past and spark questions about the future.</p>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 py-4 text-left ml-20">
        <div class="title-font font-medium text-white tracking-widest text-lg mb-5">HOURS</div>
        <nav class="list-none mb-10">
        <p className='mb-3'><li>
            <p class="text-gray-400 text-left">TUE-THU: 10AM-7PM</p>
          </li></p>
          <p className='mb-3'><li>
            <p class="text-gray-400  text-left">FRI: 1PM-8PM</p>
          </li></p>
          <p className='mb-3'><li>
            <p class="text-gray-400 text-left">SAT-SUN: 10AM-9PM</p>
          </li></p>
          <li>
            <p class="text-gray-400 text-left">MON: CLOSED</p>
          </li>
        </nav>
       </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 py-4 text-left ml-14 mb-3">
        <div class="title-font font-medium text-white tracking-widest text-lg mb-5">EXPLORE</div>
        <nav class="list-none mb-2">
          <p className='mb-3'><li>
            <a href='./About' class="text-gray-400 hover:text-gray-600">About Us</a>
          </li></p>
          <p className='mb-3'><li>
            <a href='./Gallery' class="text-gray-400 hover:text-gray-600">What's New</a>
          </li></p>
          <p className='mb-3'><li>
            <a href='./Gallery' class="text-gray-400 hover:text-gray-600">Catagories</a>
          </li></p>
          <li>
            <a href='./Gallery' class="text-gray-400 hover:text-gray-600">Events</a>
          </li>
        </nav>
      </div>
      <div class="px-2 py-4 text-left">
      <div class="title-font font-medium text-white tracking-widest text-lg mb-5">GET IN TOUCH</div>
        <p class="flex items-center justify-center text-md md:justify-start mb-3 text-gray-400 hover:text-gray-600">
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
            class=" hidden md:block w-5 mr-3 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 670 560">
            <path fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
            </path>
          </svg>
          <a href='https://goo.gl/maps/hwNF5TrC1RCWPB7m7'>
            <p>Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003</p>   
            </a>
        </p>
        <p class="flex items-center justify-center md:justify-start mb-3 text-gray-400 hover:text-gray-600">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
          <a href="mailto:SpectraArtGallery@gmail.com">SpectraArtGallery@gmail.com</a>
        </p>
        <p class="flex items-center justify-center md:justify-start mb-3 text-gray-400 hover:text-gray-600">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          <a href="tel:+919532XXXXXX">9532XXXXXX</a>
        </p>
        <p class="flex items-center justify-center md:justify-start text-gray-400 hover:text-gray-600">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
            class="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
            </path>
          </svg>
          + 01 353 314 XX
        </p>
      </div>
    </div>
  </div>
  <div class="bg-slate-600">
    <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-black text-md text-center sm:text-left py-1">© 2022 SpectraArtGallery</p>
      <span class="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
      <p class="text-black text-xl text-center sm:text-right text-bold py-1">Get Connected : </p>
        <button class="hover:animate-bounce w-6 h-6 mx-2 my-auto inline-flex items-center justify-center rounded-lg bg-transparent flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
          </button>
          <button class="hover:animate-bounce w-6 h-6 mr-2 my-auto inline-flex items-center justify-center rounded-lg bg-transparent flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
          </button>
          <button class="hover:animate-bounce w-6 h-6 mr-2 my-auto inline-flex items-center justify-center rounded-lg bg-transparent flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
          </button>
          <button class="hover:animate-bounce w-6 h-6 my-auto inline-flex items-center justify-center rounded-lg bg-transparent flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </button>
        </span>
    </div>
  </div>
</footer>
      
      </div>
  )
}

export default Footer