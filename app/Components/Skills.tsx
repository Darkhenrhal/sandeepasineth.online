"use client";
import React from "react";

import { AnimatePresence, color, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/app/Components/ui/canvas-reveal-effect";
import { TbSettingsCode } from "react-icons/tb";
import Image from 'next/image';


const Skills=() => {
  return (
    <section className="w-full h-full py-10" id="skills">
        <h1 className="heading">
            My <span className="text-purple ">Skills</span>
        </h1>
      <div className="my-[20px] flex flex-col lg:flex-row items-center justify-center gap-4 ">
        <Card 
                  title="Development"
                  // icon={<AceternityIcon order="Developemt" />} 
                  // icon={<Image src="/skill-1.png" alt="skill-1"/>} 
                  icon={<img src="/skill-1.png" alt="skill-1"/>} 

                  description={
                    <div className="grid grid-cols-3 gap-3">
                      {/* <div className="border-2 rounded-[100%]">ReactJs</div> */}
                      <div>
                        <h2>ReactJs</h2>
                      </div>
                      <div>
                        <h2>Springboot</h2>
                      </div>
                      <div>
                        <h2>.Net</h2>
                      </div>
                      <div>
                        <h2>SQL</h2>
                      </div>
                      <div>
                        <h2>MongoDB</h2>
                      </div>
                      <div>
                        <h2>HTML5</h2>
                      </div>
                      <div>
                        <h2>CSS3</h2>
                      </div>
                      <div>
                        <h2>TailwindCSS</h2>
                      </div>
                      <div>
                        <h2>JavaScript</h2>
                      </div>
                      <div>
                        <h2>Java</h2>
                      </div>
                      <div>
                        <h2>C</h2>
                      </div>
                      <div>
                        <h2>C#</h2>
                      </div>
                      <div>
                        <h2>Kotlin</h2>
                      </div>
                      <div>
                        <h2>Python</h2>
                      </div>
                      <div>
                        <h2>PHP</h2>
                      </div>   
                    </div>
                  }>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
                  title="Design"
                  //icon={<Image src="/skill-2.png" alt="skill-3"/>} 
                  icon={<img src="/skill-2.png" alt="skill-3"/>} 
                  description={
                    <div className="grid grid-cols-1 gap-3">
                      {/* <div className="border-2 rounded-[100%]">ReactJs</div> */}
                      <div>
                        <h2>Figma</h2>
                      </div>
                      <div>
                        <h2>Illustrator</h2>
                      </div>
                      <div>
                        <h2>Photoshop</h2>
                      </div>
                      <div>
                        <h2>Canva</h2>
                      </div>
                    </div>
                  }>

          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
     </Card>
        <Card 
                  title="Tools & Knowledge"
                  //icon={<Image src="/skill-3.png" alt="skill3"/>} 
                  icon={<img src="/skill-3.png" alt="skill3"/>} 

                  description={<div className="grid grid-cols-1 gap-3">
                  {/* <div className="border-2 rounded-[100%]">ReactJs</div> */}
                  <div>
                    <h2>Version control (Git + GitHub)</h2>
                  </div>
                  <div>
                    <h2>Command Line</h2>
                  </div>
                  <div>
                    <h2>Postman</h2>
                  </div>
                  <div>
                    <h2>SQL Server Management Studio</h2>
                  </div>
                  <div>
                    <h2>Mongo Compass</h2>
                  </div>
                  <div>
                    <h2>Docker</h2>
                  </div>
                  <div>
                    <h2>Linux Basics</h2>
                  </div>
                  
                </div>
              }>
          <CanvasRevealEffect
            animationSpeed={3}
            // containerClassName="bg-sky-600"
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 rounded-3xl lg:h-[35rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-[300px] md:w-[250px] sm:[120px] lg:[300px]  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-3xl">
          {title}
        </h2>
        <h2 className=" text-sm dark:text-white overflow-auto  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color:'#e4ecff'}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order: string}) => {
  return (
    
    <div>
      <button className="relative inline-flex items-center justify-center h-12 w-12 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-0 bg-gradient-to-r from-f6933b to-ff00c1 via-8b4fe1 rounded-full" />
        <span className="text-sm font-medium text-white px-3 py-1">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Skills