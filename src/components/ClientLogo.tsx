'use client'

import starbucks from "../../public/client-logos/Starbucks_Corporation_Logo_2011.svg.png"
import kfc from "../../public/client-logos/1200px-KFC_logo.svg.png"
import subway from "../../public/client-logos/Subway-logo-500x278.png"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"


const ClientLogos = () => {

    const clientVariant = {
        visible:{opacity:1, translateX: 0, transition:{duration: 2}},
        hidden: {opacity:0, translateX:1000}
    }

    const control = useAnimation();
    
    const [ref,inView] = useInView();

    useEffect(()=> {
        if(inView){
            control.start("visible");
        }
    },[inView, control])

    const imageContent = [
        {
        src : starbucks,
        alt: "starbucks logo",
        height: 100,
        width: 100,
    },
        {
        src : kfc,
        alt: "kfc logo",
        height: 100,
        width: 100,
    },
        {
        src : subway,
        alt: "subway logo",
        height: 100,
        width: 100,
    },
]
    return(
        <>
           <motion.div 
           ref={ref}
           variants={clientVariant}
           initial="hidden"
           animate={control}
           className="xsm:flex xsm:flex-col xsm:flex-wrap xsm:items-center xsm:justify-center xsm:mt-14 md:mt-20 md:mb-40">
                <h1 className="xsm:text-3xl xsm:text-center xsm:font-bold xsm:text-eastern-blue-700 xsm:mb-8 sm:text-4xl md:text-6xl">Investment Portfolio</h1>
                <div className="">
                    <div className="p-4 flex xsm:gap-12 md:gap-20 w-full">
                  {
                    
                    imageContent.map(content=>(
                        <a href="#" key={content.alt}>
                        <Image src={content.src} alt={content.alt} height={content.height} width={content.width} className="w-full"/>
                        </a>
                    ))
                  }
                  </div>
                </div>
                
            </motion.div> 
        </>
    )
}

export default ClientLogos;