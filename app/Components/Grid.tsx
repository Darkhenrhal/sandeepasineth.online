import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

const Grid =()=>{
    return(
        <section id="about" className="grid">
            {/* <div className=" pt-60 pb-0 lg:pt-20 md:pt-80 sm:pt-80  xl:pt-80 ">
            <h1 className='heading'>Get to know {' '} <span className="text-purple">Me</span></h1>
            </div> */}
            <BentoGrid className="w-full py-10 sm:py-5 md:py-10 lg:py-15">
            
                {gridItems.map
                (({id,title,description,className,img,imgClassName,titleClassName,spareImg})=>(
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                
                ))}
            </BentoGrid>
        </section>
    );

}
export default Grid