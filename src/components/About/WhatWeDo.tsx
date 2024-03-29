import Image from "next/image";
import nimesh2 from "../../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg";
import AboutUs from "../../../public/about-us.jpg"

const WhatWeDo = ()=> {
    return(
        <>
            <section id="whatwedo" className="xsm:mt-8 xsm:px-8 md:max-w-7xl md:mx-auto lg:px-0">
                <h1 className="font-light text-xl mb-12">
                    WHAT WE DO
                </h1>
                <p className="font-semibold text-2xl">We invest across industries in both established and growth-oriented businesses across the globe.</p>
                <div className="flex xsm:flex-col-reverse md:flex-row flex-wrap md:justify-around md:h-auto xsm:mt-20">
                    <div className="flex flex-col flex-wrap xsm:mt-4 md:mt-0 md:w-1/2 justify-evenly lg:w-3/5">
                        <div className="flex flex-col flex-wrap mb-5 md:w-5/6">
                        <h2 className="font-semibold text-2xl pb-8 md:text-xl md:pb-4 lg:text-2xl lg:pb-2">
                        Disciplined Due Diligence
                        </h2>
                        <p className="font-light text-xl pb-8 md:text-sm md:pb-4 lg:text-xl lg:pb-6">Our investment approach is based on a disciplined due diligence process that measures risk while identifying the catalysts for increased value. We engage only in friendly transactions and work with talented management teams to achieve positive results.</p>
                        <hr className="h-2 border-2 bg-eastern-blue-700"/>
                        </div>
                        <div className="flex flex-col flex-wrap mb-5 md:w-5/6">
                        <h2 className="font-semibold text-2xl pb-8 md:text-xl md:pb-4 lg:text-2xl lg:pb-2">
                        Transformative Impact
                        </h2>
                        <p className="font-light text-xl pb-8 md:text-sm md:pb-4 lg:text-xl lg:pb-6">We strive to create value by investing in great businesses where our capital, strategic insight, global relationships and operational support can drive transformation.</p>
                        <hr className="h-2 border-2 bg-eastern-blue-700"/>
                        </div>
                        <div className="flex flex-col flex-wrap mb-5 md:w-5/6">
                        <h2 className="font-semibold text-2xl pb-8 md:text-xl md:pb-4 lg:text-2xl lg:pb-2">
                        Staying Power
                        </h2>
                        <p className="font-light text-xl pb-8 md:text-sm lg:text-xl">When we partner with a business, we focus on building it to last. Our staying power, drawn from the scale and breadth of the platform we’ve grown over 35 years, helps our companies withstand market cycles and succeed for the long term.</p>
                        </div>
                    </div>
                    <div className="h-full  xsm:w-5/6 xsm:mx-auto sm:w-full md:w-1/2 lg:w-2/5">
                        <Image src={AboutUs} alt="what we do image" className="w-full h-full sm:object-cover"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhatWeDo;