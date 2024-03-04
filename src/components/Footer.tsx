import Image from "next/image";
import logo from "../../public/Apex Funds limited logo-01.png"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FooterPage = () => {
    return(
        <>
            <footer className="w-full bg-slate-200 md:p-0 md:pt-4 leading-8 text-eastern-blue-700 mt-8">
                <div className="flex flex-wrap flex-row md:justify-between md:max-w-7xl md:mx-auto">
                <div className="space-y-4 xsm:p-4 md:p-0">
                <div className="h-20 w-20">
                    <Image src={logo} alt="apex logo" width={200} height={200} className="max-w-full"/>
                </div>
                
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
                    <h3 className="font-semibold text-xl">Blogs</h3>
                    <ul className = "text-lg space-y-4">
                        <li><a href="/">Blog 1</a></li>
                        <li><a href="/about">Blog 2</a></li>
                        <li><a href="/blogs">Blog 3</a></li>
                        <li><a href="">Blog 4</a></li>
                    </ul>
                    
                </div>
                <div className="flex flex-col space-y-4 xsm:p-4 md:p-0">
                    <h3 className="text-xl font-semibold">Newsletter</h3>
                    <ul className="text-lg space-y-4">
                        <li><a href="/">Newsletter 1</a></li>
                        <li><a href="/about">Newsletter 2</a></li>
                        <li><a href="/blogs">Newsletter 3</a></li>
                    </ul>
                    
                </div>
                <div className="flex flex-col space-y-4 xsm:p-4 md:p-0">
                    <h3 className="text-xl font-semibold">Useful Links</h3>
                    <ul className="text-lg space-y-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="">Newsletter</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    
                </div>
                </div>
                <div className="flex flex-wrap flex-row md:justify-between md:max-w-7xl md:mx-auto md:my-6">
                    <ul className="flex flex-row gap-4">
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaFacebook size={30}/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaLinkedin size={30} className=""/></li></a>
                        <a href=""><li className="transition ease-in-out duration-500 hover:text-eastern-blue-900"><FaInstagramSquare size={30}/></li></a>
                    </ul>
                    <div>
                        <a href=""><button className="p-2 border-none transition ease-in-out duration-500 hover:bg-eastern-blue-900 hover:text-slate-100 bg-eastern-blue-700 rounded-xl text-slate-200 w-32 font-bold ">Contact Us</button></a>
                    </div>
                </div>
               <div className="w-full h-20 bg-slate-600">
                    <span className="font-semibold text-white text-xl flex justify-center items-center pt-4">&copy; 2024, Apex funds. All Rights Reserved</span>
               </div>
            </footer>
        </>
    )
}

export default FooterPage;