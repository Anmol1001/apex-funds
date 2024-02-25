import Image from "next/image";
import heroImage from "../../../public/team-members/1685724293391.jpg"

const AboutHeroPage = () => {
    return(
        <>
            <section id="about-us" className="">
                <div className="bg-black h-[80vh] bg-cover bg-center bg-gradient-to-tr from-slate-900 to-slate-600 relative">
                    <Image src={heroImage} alt="hero image for about us page" className="w-full h-full object-cover absolute mix-blend-overlay"/>
                    <div className="md:p-24">
                        <h1 className="text-white md:text-7xl font-bold text-center md:p-8">
                            Private <span className="text-eastern-blue-300">Equity</span>
                        </h1>
                        <p className="text-white md:text-3xl font-bold text-center">
                        We play a vital role in helping companies <span className="text-eastern-blue-300">realize their growth potential.</span> We uncover and unlock value by identifying great companies with untapped <span className="text-eastern-blue-300">potential and enhancing their performance.</span>
                        </p>
                    </div>
                </div>
                <div className="w-full h-40 bg-slate-300 text-eastern-blue-700 flex items-center justify-evenly mx-auto">
                    <div className="flex gap-2 flex-col flex-wrap">
                        <h2 className="font-bold text-2xl">200Cr</h2>
                        <h5 className="font-light text-xl">Corporate Private Equity AUM</h5>
                        <hr className="h-2 w-72 border-0 rounded-lg bg-eastern-blue-700"/>
                    </div>
                    <div className="flex gap-2 flex-col flex-wrap">
                        <h2 className="font-bold text-2xl">$36B</h2>
                        <h5 className="font-light text-xl">Available to invest</h5>
                        <hr className="h-2 w-72 rounded-lg bg-eastern-blue-700"/>
                    </div>
                    <div className="flex gap-2 flex-col flex-wrap">
                        <h2 className="font-bold text-2xl">15</h2>
                        <h5 className="font-light text-xl">Portfolio Companies</h5>
                        <hr className="h-2 w-72 border-0 rounded-lg bg-eastern-blue-700"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHeroPage;