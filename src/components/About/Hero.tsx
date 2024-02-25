import Image from "next/image";
import heroImage from "../../../public/team-members/1685724293391.jpg"

const AboutHeroPage = () => {
    return(
        <>
            <section id="about-us" className="">
                <div className="bg-black xsm:h-auto bg-gradient-to-tr from-slate-900 to-slate-600 w-full md:h-80">
                        <h1 className="text-white xsm:font-bold xsm:text-5xl xsm:py-4  text-center md:pt-12 md:text-7xl">
                            Private <span className="text-eastern-blue-300">Equity</span>
                        </h1>
                        <p className="text-white text-center xsm:text-xl xsm:py-8 xsm:px-4 md:w-4/6 md:mx-auto">
                        We play a vital role in helping companies <span className="text-eastern-blue-300">realize their growth potential.</span> We uncover and unlock value by identifying great companies with untapped <span className="text-eastern-blue-300">potential and enhancing their performance.</span>
                        </p>
                        </div>
                <div className="w-full h-auto xsm:py-8 bg-slate-300 text-eastern-blue-700 xsm:flex xsm:flex-col xsm:gap-8 sm:flex-row sm:px-4 items-center justify-evenly mx-auto">
                    <div className="flex xsm:gap-2 md:gap-4 flex-col flex-wrap">
                        <h2 className="font-bold  xsm:text-xl md:text-2xl ">200Cr</h2>
                        <h5 className="xsm:font-light sm:text-sm md:text-lg">Corporate Private Equity AUM</h5>
                        <hr className="h-1 xsm:w-60 sm:w-52 md:w-60 border-0 rounded-lg bg-eastern-blue-700"/>
                    </div>
                    <div className="flex gap-2 flex-col flex-wrap">
                        <h2 className="font-bold xsm:text-xl  md:text-2xl">$36B</h2>
                        <h5 className="xsm:font-light sm:text-sm md:text-lg">Available to invest</h5>
                        <hr className="h-1 xsm:w-60 sm:w-52 md:w-60 border-0 rounded-lg bg-eastern-blue-700"/>
                    </div>
                    <div className="flex gap-2 flex-col flex-wrap">
                        <h2 className="font-bold text-2xl xsm:text-xl md:text-2xl">15</h2>
                        <h5 className="xsm:font-light sm:text-sm md:text-lg">Portfolio Companies</h5>
                        <hr className="h-1 xsm:w-60 sm:w-48 md:w-60 border-0 rounded-lg bg-eastern-blue-700"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutHeroPage;