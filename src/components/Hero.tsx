import Image from "next/image";
import logo from "../../public/Apex Funds limited logo_page-0002.jpg"

const HeroPage = () => {
    return (
        <>
            <div className="sm:flex h-[80vh] w-full bg-[#fafafa] justify-evenly p-8">  
            <div className="p-16">  
            <p className="text-4xl font-semibold"><span className="text-eastern-blue-500">"</span>Commodities tend to zig<span className="block text-eastern-blue-500"> when the equity markets zag</span></p>
            </div>
            <Image src={logo} height={500} width={400} alt="logo pic"/>
            </div>
        </>
    )
}

export default HeroPage;