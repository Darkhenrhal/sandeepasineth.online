"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


export const TextGenerateEffect2 = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.05),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
   
    <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          // Check if the word is 'specializing' and add a line break before it
          const isSpecializing = word.toLowerCase() === 'specializing';
          return (
            <span key={word + idx}>
              {isSpecializing && <br />}
              <motion.span
                className={'opacity-0 uppercase tracking-widest text-sm text-center text-purple max-w-80'}
              >
                {word}{" "}
              </motion.span>
            </span>
          );
        })}
      </motion.div>
    );
  };


  return (
    <div className={cn("font-sm", className)}>
      <div className="my-4 mt-0 w-[90vw] text-center">
        <div className=" dark:text-white text-black  leading-snug tracking-wide">
          {renderWords()}
          
        </div>        
      </div>
    </div>
  );
};
