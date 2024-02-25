'use client'

import starbucks from "../../public/client-logos/Starbucks_Corporation_Logo_2011.svg.png"
import kfc from "../../public/client-logos/1200px-KFC_logo.svg.png"
import subway from "../../public/client-logos/Subway-logo-500x278.png"
import Image from "next/image"

const ClientLogos = () => {
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
           <div className="xsm:flex xsm:flex-col xsm:flex-wrap xsm:items-center xsm:justify-center md:mt-8">
                <h1 className="xsm:text-3xl xsm:font-bold xsm:text-eastern-blue-700 xsm:mb-8 sm:text-4xl md:text-6xl">Our Clients</h1>
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
            </div> 
        </>
    )
}

export default ClientLogos;