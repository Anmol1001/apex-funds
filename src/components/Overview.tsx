"use client"
import Image from "next/image";
import stupa from "../../public/WhatsApp Image 2024-02-11 at 14.55.31_174152fe.jpg"
import nimesh from "../../public/WhatsApp Image 2024-02-11 at 14.53.03_69ac609a.jpg"
import overview from "../../public/team-members/overview.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const OverviewPage = () => {

    const overviewVariant = {
        visible:{opacity:1, translateX: 0, transition:{duration: 2}},
        hidden: {opacity:0, translateX:-100}
    }

    const control = useAnimation();
    
    const [ref,inView] = useInView();

    useEffect(()=> {
        if(inView){
            control.start("visible");
        }
    },[inView, control])

    return(
        <>
        <motion.div 
        ref={ref}
        variants={overviewVariant}
        initial="hidden"
        animate={control}
        className="xsm:flex xsm:flex-col-reverse xsm:flex-wrap md:flex-row md:max-w-7xl md:mx-auto p-8 xsm:items-center md:justify-between overflow-hidden">
           <div className="xsm:w-4/6 xsm:mt-4 md:w-2/5 lg:w-2/5 lg:h-96">
                <Image src={overview} alt="nimesh photo" className="w-full h-full object-cover"/>
            </div>
         <div className="xsm:w-5/6 xsm:space-y-4 md:w-1/2 md:pl-4">
          <h1 className="xsm:text-center text-eastern-blue-700 font-bold xsm:text-2xl underline">Overview</h1> 
          <p className="xsm:text-[0.7rem] sm:text-sm lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ratione non dignissimos temporibus distinctio! Voluptate ullam corrupti debitis aperiam iste praesentium repudiandae officiis deleniti reprehenderit! Dignissimos ea nisi dicta quis molestiae <span className="text-eastern-blue-700"> officiis cum soluta alias distinctio! Blanditiis consectetur molestias temporibus</span> distinctio ea maxime soluta, ipsam illum fugiat unde! Dolores sapiente iste quaerat optio assumenda tenetur ad itaque dignissimos nulla eum delectus molestias doloremque quam reprehenderit, repellendus provident earum possimus explicabo quo omnis maxime, quae aspernatur velit illum. Libero animi amet laborum porro voluptate necessitatibus voluptatibus adipisci consequuntur doloribus atque. Laboriosam veniam libero ab dolorum, dolore laborum exercitationem blanditiis. Mollitia, tempora.
            </p> 
            </div>
          </motion.div>
        </>
    )
}

export default OverviewPage;