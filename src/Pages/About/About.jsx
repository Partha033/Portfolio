import React from 'react'

const About = () => {
  return (
    <div id="about-section" className="container mx-auto px-1    md:px-0 lg:px-32 py-4 font-figtree w-full">
      <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">
        About
      </div>
      <div className="mt-[1.5%] lg:grid grid-cols-2 gap-5">
        <div className="text-gray-500 text-sm md:text-base lg:text-base lg:w-full mt-[0.8%]">
          I’m Parthiban, a dedicated MERN Stack Developer from Tamil Nadu, India, with 6 months of professional experience in building responsive and scalable web applications. 
          <div className='mt-[3%]'>
            <span className='text-black '>Little Background</span>

          <span className="text-gray-500 text-sm md:text-base lg:text-base lg:w-full mt-[2%] block">
            I hold a <span className="font-semibold text-black">Bachelor’s degree in Information Technology</span>, 
            where I built a strong foundation in programming and problem-solving. After graduation, 
            I discovered my passion for full-stack development and chose the MERN stack as my specialization.  

            Over the past <span className="font-semibold text-black">6 months</span>, I have been honing my skills in 
            building responsive and scalable web applications while staying aligned with the latest industry trends.  

            Currently, I’m working as a <span className="font-semibold text-black">Software Developer at Wonder Worth Solutions</span>, 
            where I contribute to building robust and efficient applications while continuously expanding my expertise.  

            Beyond coding, I’m someone who loves to <span className="font-semibold text-black">explore new places, meet new people, 
            and create meaningful connections</span>. Traveling gives me fresh perspectives, fuels my creativity, and 
            inspires me to approach challenges with an open mind.  

            I consider myself <span className="font-semibold text-black">adaptable, curious, and always eager to learn</span>—qualities 
            that help me grow both personally and professionally.
          </span>

          </div>
        </div>
        <div id="default-carousel" className=" relative w-full">
          <div className="overflow-hidden rounded-lg md:h-96 relative">
            <div className=" w-full h-full">
              <img className="absolute w-full h-full object-cover opacity-0 animate-fade1" src="/Munnar.png" alt="Carousel1" />
              <img className="absolute w-full h-full object-cover opacity-0 animate-fade2" src="/bike.jpg" alt="Carousel2" />
            </div>
          </div>
        </div>
        {/* <div>
          <a href="" className='p-4 py-2 bg-[#0370DD] text-white rounded-lg font-bold transition-all duration-500 hover:bg-blue-950'>Read More</a>
        </div> */}
        <div>
        </div>
      </div>
    </div>
  )
}

export default About
