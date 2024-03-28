import Image from "next/image";
import logo from "../../public/Apex Funds limited logo-01.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ContactForm from "./contact-com/ContactForm";

const FooterPage = () => {
    return(
        <>
            <footer className="w-full bg-gradient-to-tr from-eastern-blue-700 to-slate-700 md:p-0 md:pt-4 leading-8 text-slate-100 mt-8">
               
                  
                <div className="flex xsm:flex-col xsm:items-start sm:gap-20 md:flex-row md:gap-60 md:justify-around pb-8">
                <div className="space-y-4 xsm:p-4 md:p-0">
                <div className="h-32 w-32">
                    <Image src={logo} alt="apex logo" className="w-full h-full object-cover"/>
                </div>
                <p className="text-lg font-light max-w-48">We are here to Lorem ipsum dolor sit amet consectetur.</p> 
                </div>
                <div className="flex flex-col space-y-4 xsm:p-4 md:p-0">
                <h3 className="text-xl font-semibold border-b-2 w-1/4"> Office </h3>
                <p className="text-lg">Gyaneshwor Tower</p>
                <p className="text-lg">Gyaneshwor, Nepal</p>   
                <div>
                    <span className="text-lg font-semibold">Phone</span>
                    <span className="text-lg">: +9779842588888</span>
                </div>
                <div>
                    <span className="text-lg font-semibold">Email</span>
                    <span className="text-lg">: info@example.com</span>: 
                </div>
                </div>
                <div className="flex flex-col space-y-4 xsm:p-4 md:p-0">
                    <h3 className="text-xl font-semibold border-b-2">Useful Links</h3>
                    <ul className="text-lg space-y-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="">Newsletter</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    
                </div>
                
                </div>
               
            </footer>
        </>
    )
}

export default FooterPage;