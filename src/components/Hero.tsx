import Image from "next/image";
import logo from "../../public/Apex Funds limited logo-01.png";

const HeroPage = () => {

    


    return (
        <>
            <div className="flex sm:flex-col sm:items-center sm:justify-center md:flex-row flex-wrap w-full bg-[rgb(250,250,250)] lg:justify-between p-8 sm:z-0 md:h-[90vh] md:max-w-7xl md:mx-auto">  
            <div className="sm:flex md:justify-center md:items-center">  
            <p className="xsm:text-2xl xsm:mb-8 sm:text-4xl sm:font-semibold opaque"><span className="text-eastern-blue-500 block animation1">{`"Commodities tend to zig`}</span><span>{ `when the equity markets zag"`}</span></p>
            </div>
            <div className="sm:w-96">
            <Image src={logo} alt="logo pic" className="w-full img-animation"/>
            </div>
            </div>
        </>
    )
}

export default HeroPage;