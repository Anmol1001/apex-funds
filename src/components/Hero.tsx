import Image from "next/image";
import logo from "../../public/Apex Funds limited logo_page-0002.jpg"

const HeroPage = () => {
    return (
        <>
            <div className="flex sm:flex-col sm:items-center md:flex-row flex-wrap w-full bg-[#fafafa] justify-evenly p-8 sm:z-0 md:h-[90vh]">  
            <div className="sm:flex md:justify-center md:items-center md:w-1/2">  
            <p className="xsm:text-2xl xsm:mb-8 sm:text-4xl sm:font-semibold opaque"><span className="text-eastern-blue-500 block animation1">{`"Commodities tend to zig`}</span><span className="block">{ `when the equity markets zag"`}</span></p>
            </div>
            <div className="sm:w-96">
            <Image src={logo} alt="logo pic" className="w-full"/>
            </div>
            </div>
        </>
    )
}

export default HeroPage;