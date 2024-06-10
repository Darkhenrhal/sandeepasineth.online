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
import { GrLinkedin } from "react-icons/gr";
import MBsecond from "./MBsecond";
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section>
      
      <div className=" pb-0 lg:pt-20 md:pt-[550px] sm:pt-100 pt-[240px] mt-2  xl:pt-20  ">
        <h1 className='heading'>Get to {' '} <span className="text-bluem">know</span>   <span className="text-purple">Me</span></h1>
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
   // navigator.clipboard.writeText('sineth21404@gmail.com');
   const link = document.createElement('a');
   link.href = '/files/resume.pdf';
   link.download = 'Sandeepa Sineth Wickramasinghe.pdf'; // The filename for the downloaded PDF
   link.click();
  setCopied(true)
  }

  const goToLinkedIn = () => {
    window.open("https://linkedin.com/in/sandeepa-sineth", "_blank");
  };

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
            // <Image
            //   src={img}
            //   alt={img}
            //   className={cn(imgClassName, "object-cover object-center ")}
            // />
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
            // <Image
            //   src={spareImg}
            //   alt={spareImg}
            //   //   width={220}
            //   className="object-cover object-center w-full h-full"
            // />
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
        
        {id===5 && (
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
          <div className="mt-5 mb-5 self-center">
                <MBsecond
                title="Visit "
                icon={<GrLinkedin />}
                position="left"
                handleClick={goToLinkedIn}
                otherClasses="!bg-[#161A31]"
              />
          </div>
          
        </div>
        )}
      {id===4 && (
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
          {title}
          </div>
          
        </div>
      </div>
      )}  
      
      {id===1 && (
        <div className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 flex`}>{title}</div>
          <div className="font-sans font-extralight w-[95%]  md:text-sm  lg:text-base  text-sm text-[#C1C2D3] z-10">
            <div className="items-center">
                <p className="text-left text-[#C1C2D3] m-[20px]">
                  <b className="text-bluem">I&apos;m a fresh graduate from the University of Kelaniya,&nbsp;Sri Lanka</b> with a degree in Computer Science and additional studies in Statistics and Pure Mathematics. My journey in the tech world has been an exciting blend of developing and designing software and web applications. From initial concept to final deployment, I strive to create solutions that not only function efficiently but also provide a seamless, pixel-perfect user experience.
                </p>

                <p className="text-left  text-[#C1C2D3] m-[20px]">
                  I am passionate about learning and constantly seek out new and better ways to create clean, efficient, and scalable code. I am always eager to embrace opportunities that allow me to enhance my skills and knowledge.
                </p>
                <p className="text-left  text-[#C1C2D3] m-[20px]">
                Collaboration is key to my process; I thrive in environments where I can work alongside others who inspire and challenge me to reach my full potential. My ultimate goal is to create innovative and impactful software with a team that shares my passion for excellence.

                </p>
                <p className="text-left  text-[#C1C2D3] m-[20px]">
                <b className="text-purple">When I&apos;m not in front of a computer screen,</b> you&apos;ll likely find me immersed in a good book, enjoying the company of dogs, or exploring the beauty of nature. These moments of relaxation and inspiration fuel my creativity and drive.

                </p>

                <p className="text-left text-bluem text-lg">
                Let&apos;s create something amazing together!

                </p> 
            </div>
        </div>
        </div>
        
      )}
      {id===2 && (
        <div className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-fit min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
          <div
          className={`font-sans text-lg lg:text-base max-w-96 font-bold z-50 block`}
          > 
            {description}
          </div>
          <div className="font-sans font-extralight  md:text-xs lg:text-base text-sm text-[#C1C2D3] z-100">
          
          </div>
          
          <div className="mt-3">
          <GlobeDemo/>
          </div>

          
        </div>
      )}
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
  <div className="relative flex flex-col h-full justify-center items-center">
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
    </BackgroundGradientAnimation>

    <div className="mt-5 relative w-full flex flex-col items-center">
      <div
        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-50 text-center`}
      >
        {title}
      </div>

      <div className="mt-5 mb-5">
        <MBsecond
          title={copied ? "Resume Downloaded" : "Download Resume"}
          icon={<HiDocumentDownload />}
          position="left"
          handleClick={handleCopy}
          otherClasses="!bg-[#161A31]"
        />
      </div>

      <div
        className={`z-100 w-fit h-fit absolute bottom-10 right-1/2 transform translate-x-1/2`}
      >
        <Lottie options={{
          loop: copied,
          autoplay: copied,
          animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          }
        }} />
      </div>
    </div>
  </div>
)}

        
  </div>
  </div>

  );
};


