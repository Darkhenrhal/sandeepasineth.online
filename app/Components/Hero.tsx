// 

"use client";

import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { HiDocumentDownload } from 'react-icons/hi';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { TextGenerateEffect1 } from './ui/text-generation-1';
import { TextGenerateEffect2 } from './ui/text-generation-2';


const Hero = () => {
  // Use this for Type writer effect
  // const [text] = useTypewriter({
  //   words: ["Full-Stack Developer", "UI/UX Designer", "Mobile Application Developer"],
  //   loop: true,
  // });

  
  return (
    <div className='pb-20 pt-36' id='hero'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-2 left-80 h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[75vw]' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20">
        <div className='max-w-[95vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          
            <TextGenerateEffect1
              className='text-center'
              words='Hello,&nbsp;It&apos;s me,'
            />

            
            
          <TextGenerateEffect
            className='text-center text-[30px] md:text-5xl lg:text-6xl'
            words="Sandeepa Sineth Wickramasinghe"
          />
          <TextGenerateEffect2
            className='text-center md:tracking-wider mb-4 text-lg md:text-sm lg:text-xl'
            words='I&apos;m a {Software Developer} / {Mobile Application Developer} / {Web Developer} / {UI/UX Designer} specializing in designing & developing exceptional digital experiences.'
          />

          
          <pre className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl opacity-0 animate-fadeIn delay-1000ms'>
           {/* <span className='opacity-0 animate-fadeIn delay-1000ms'>I am a </span><span>{text}</span><Cursor /> </pre>  */}
           {/* <span className=''>I am a </span><span>{text}<Cursor /> </span> */}
           </pre>
          {/* <div className='flex gap-5 opacity-0 animate-fadeIn delay-1000ms'>
            <a href='#about'>
              <MagicButton
                title="Say, Hello!"
                icon={<BiSolidMessageRounded />}
                position='right'
              />
            </a>
            <a href='#about'>
              <MagicButton
                title="Download Resume"
                icon={<HiDocumentDownload />}
                position='right'
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
