'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { FaHandPointUp } from "react-icons/fa";
import { HiDocumentDownload } from 'react-icons/hi';
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import MBsecond from "./MBsecond";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section>
      <div>
             <div className=" pb-0 lg:pt-20 md:pt-100 sm:pt-100  xl:pt-20 ">
            <h1 className='heading'>Get to know {' '} <span className="text-purple">Me</span></h1>
            </div>
      </div>
      <div
          className={cn(
            "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
            className
          )}
        > 
          
          {children}
    
    </div>
    </section>
    
          
    
    
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
    
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img: string;
  imgClassName:string;
  titleClassName:string;
  spareImg:string;
  id:number,
}) => {
  const [copied,setCopied]=useState(false);
  //Update this to download resume... 
  const handleCopy =()=>{
    navigator.clipboard.writeText('sineth21404@gmail.com');

    setCopied(true)
  }


  return (

    <div
    className={cn(
      "row-span-1 relative overflow-hidden rounded-3xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.1]",
      className
    )}
    style={{
      //   add these two
      //   you can generate the color from here https://cssgradient.io/
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
   >
    
      
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
          >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 flex`}
          >
            <div>
            {/* {id===6 && <FaHandPointUp className="text-[38px] mr-0 pr-0"/>} */}
            </div>
            <div>
            {title}
            </div>
            
          </div>
        </div>
         
       
      {id===2 && <GlobeDemo/>}
      {id===3 && (
        <div className="flex gap-1 lg:gap-5 w-fit
        absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {['','Python','JavaScript','React.Js'].map
            ((item)=>
              <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base
              opacity-50 lg:opacity-100 rounded-lg text-center gap-1 bg-[#10132E]">
                {item}
              </span>
            )
            }
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
            
          </div>
          <div className="flex flex-col gap-3 lg:gap-8">
          <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>

            {['','SpringBoot','MongoDB','MySQL','SQL'].map
            ((item)=>
              <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base
              opacity-50 lg:opacity-100 rounded-lg text-center mt-0 ml-1 mr-6 bg-[#10132E]">
                {item}
              </span>
            )
          }

          </div>

        </div>
      )}
      { id===6 && (
        
        // <div className="mt-5 relative">
        <div className="mt-30 absolute block">
        {/* button border magic from tailwind css buttons  */}
        {/* add rounded-md h-8 md:h-8, remove rounded-full */}
        {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
        {/* add handleCopy() for the copy the text */}
        <div
          className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
            }`}
        >
        <Lottie options={{
                    loop:copied,
                    autoplay:copied,
                    animationData,
                    rendererSettings:{
                      preserveAspectRatio:'xMidYMid slice',
                    }
                  }}/>
      
      
        </div>
        <MBsecond
          title={copied ? "Resume Downloaded" : "Download Resume"}
          icon={<HiDocumentDownload />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
        </div>          

       
         
      )}
        
  </div>
  </div>

  );
};


