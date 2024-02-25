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
           <div className="container flex flex-col flex-wrap justify-center items-center">
                <h1 className="text-[70px]">Our Clients</h1>
                <div className="flex gap-24">
                  {
                    imageContent.map(content=>(
                        <Image src={content.src} alt={content.alt} height={content.height} width={content.width}/>
                    ))
                  }
                </div>
            </div> 
        </>
    )
}

export default ClientLogos;