'use client';

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { profile } from 'console'
import Image from 'next/image'

const Footer = () => {
  
  const goToSocialMedia = (socialMediaId: number) => {
    switch(socialMediaId) {
      case 1:
        window.open("https://github.com/Darkhenrhal","_blank");
        break;
      case 2:
        window.open("https://linkedin.com/in/sandeepa-sineth","_blank");
        break;
      case 3:
        window.open("https://x.com/sandeepa_sineth","_blank");
        break;
    }
  }
  
  return (
    <section className="w-full pt-[300px] md:pt-[250px] pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        {/* <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        /> */}
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col mb-16 items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a className='mb-16' href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16  md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 SandeepaSineth
        </p>

        <div className="flex items-center md:gap-3 mt-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            ><button onClick={() => goToSocialMedia(info.id)}>

                              {/* <Image src={info.img} alt="icons" width={20} height={20}  /> */}
                              <img src={info.img} alt="icons" width={20} height={20}  />


            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
      )
}

export default Footer