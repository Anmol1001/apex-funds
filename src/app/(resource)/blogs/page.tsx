import Image from "next/image";
import stupa from "../../../../public/WhatsApp Image 2024-02-11 at 14.51.52_c4f72cb0.jpg";
import pexels from "../../../../public/WhatsApp Image 2024-02-11 at 14.52.30_35566376.jpg";
import camera from "../../../../public/digital_camera_photo-1080x675.jpg";
import BlogCard from "@/components/Blog/BlogCard";

const BlogPage = () => {
    return (
        <>
           <section id="about-us" className="bg-gradient-to-tr from-slate-900 to-slate-600">
                <div className="xsm:h-auto w-full md:h-80 md:max-w-7xl md:mx-auto">
                        <h1 className="text-white xsm:font-bold xsm:text-5xl xsm:py-4  text-center md:pt-12 md:text-7xl">
                        Think Like a <span className="text-eastern-blue-300">Private Equiteer</span>
                        </h1>
                        <p className="text-white text-center xsm:text-xl xsm:py-8 xsm:px-4 md:w-4/6 md:mx-auto">
                        Go through exploring the formulas, tricks and trade secrets of Private Equity.  <span className="text-eastern-blue-300">Private Equity Secrets Revealed will jump start your learning with lessons and experience gained from many years of at the coalface experience </span> We uncover and unlock value by identifying great companies with untapped <span className="text-eastern-blue-300">as a Private Equiteer performance.</span>
                        </p>
                        </div>
                 <div className="bg-slate-300">       
                <div className="xsm:w-full md:max-w-7xl h-auto xsm:py-8  text-eastern-blue-700 xsm:flex xsm:flex-col xsm:gap-8 sm:flex-row sm:px-4 items-center justify-between xsm:mx-auto">
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
                </div>
            </section>
            <BlogCard />
        </>
    )
}

export default BlogPage;