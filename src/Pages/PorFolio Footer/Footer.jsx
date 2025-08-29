import React from 'react'

const Footer = () => {
  return (
    <div  className="container mx-auto px-1    md:px-0 lg:px-32 py-4 font-figtree w-full">
      <div id="contact-section" className="mb-2 font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Contact</div>
      <div className="w-full mt-6">
        <div >
          <div className="flex justify-between items-center transition-all duration-500  border-gray-200 px-1 py-3">
            <div className='flex gap-7'>

              <a href="https://www.linkedin.com/in/partha0802/" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] hover:underline "> Linked In </a>
              <a href="https://github.com/Partha033" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] hover:underline "> GitHub </a>
              <a href="mailto:partyhibanalaraj@gmail.com" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] hover:underline "> Mail </a>
              <a href="https://www.instagram.com/esperor._.me/?hl=en" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] hover:underline "> IG </a>
              
              <span  className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] hover:underline "> +91  9344619085 </span>
            </div>
            <span className={`text-black hidden font-medium text-sm md:text-base lg:text-base cursor-default  md:inline`}>Working Fulltime</span>
          </div>
          <div className='text-center text-xs'>
            © Partha
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer