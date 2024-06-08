"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


export const TextGenerateEffect = ({
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
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx == 2 ? 'text-purple':idx==1 ?'text-bluem':'dark:text-white text-black'} opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const [text] = useTypewriter({
    words: ["Full-Stack Developer", "UI/UX Designer", "Mobile Application Developer"],
    loop: true,
  });

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4 mt-0 w-[90vw]">
        <div className=" dark:text-white text-black  leading-snug tracking-wide">
          {renderWords()}   
        </div>
        
      </div>
    </div>
  );
};
