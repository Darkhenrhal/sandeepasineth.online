"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from "framer-motion";
import { LampContainer } from "../Components/ui/Lamp"
import Image from 'next/image'

const RecentProjects = () => {
  const goToProject = (ProjectId: number) => {
    switch(ProjectId) {
      case 1:
        window.open("https://github.com/Darkhenrhal/NaviGuide","_blank");
        break;
      case 2:
        window.open("https://github.com/Darkhenrhal/ToDO-.git","_blank");
        break;
      case 3:
        window.open("https://github.com/Darkhenrhal/TaEx.git","_blank");
        break;
      case 4:
        window.open("https://github.com/Darkhenrhal/Mathematics_Student_Association_Website.git","_blank");
        break;
      case 5:
        window.open("https://github.com/Darkhenrhal/Hotel_Reservation_System.git","_blank");
        break;  
      case 6:
        window.open("https://www.figma.com/design/dgIQV1Lmx88c80eQNEz8k2/Santa-GPT?t=HpI4LqPw1WvPKCe4-1","_blank");
        break;  
      case 7:
        window.open("https://www.figma.com/design/ylM7ZDvwwC9uf4WqvNYSBq/EasyPlant?node-id=0-1&t=HpI4LqPw1WvPKCe4-1","_blank");
        break;  
    }
  }


  return (
    <div className='py-20' id="RecentProjects">
      <h1 className='heading'>
        My most {''}
        <span className='text-purple'>Recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-[0px] mt-0'>
        {projects.map(({id, title, des, img, iconLists, link})=>(
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center md:w-[570px] md:h-[40vh] md:mt-[60px] sm:w-[80vw] w-[30vw] '>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[80vw] md:w-[570px] md:h-[40vh]   w-[30vw] overflow-hidden sm:h-[30vh] h-[30vh] mb-10'>
                <div>
                  {/* <Image src='/bg.png' alt='bt-img'/> */}
                  <img src='/bg.png' alt='bt-img'/>

                </div>
                {/* <Image src={img}
                alt={title}
                className='z-10 absolute bottom-0'/> */}
                <img src={img}
                alt={title}
                className='z-10 absolute bottom-0'/>
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-3'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon,index)=>(
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10
                    w-8 h-8 flex justify-center items-center' 
                    style={{
                      transform:`translateX(-${5 * 
                      index * 2}px)`
                    }}>
                      {/* <Image src={icon} alt={icon} className='p-2'/> */}
                      <img src={icon} alt={icon} className='p-2'/>

                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <button onClick={() => goToProject(id)} className='flex justify-center items-center'>
                  <p className='flex lg:text-lg md:text-xs text-purple'>Check the Project</p><FaLocationArrow className='ms-3' color='#CBACF9'/>
                  </button>
                </div>
              </div>
            </PinContainer>
          </div>
          
        ))}
      </div>
      {/* <div>
        {LampDemo()}
      </div> */}

      {/* when have new things */}
    </div>
    
  )
}

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export default RecentProjects