import Image from "next/image";
import logo from "../../public/Apex Funds limited logo_page-0002.jpg"

const FooterPage = () => {
    return(
        <>
            <footer className="w-full bg-slate-200 flex xsm:flex-col md:p-0 md:pt-4 space-y-4 leading-8 text-eastern-blue-700 mt-8">
                <div className="flex flex-wrap flex-row justify-evenly">
                <div className="space-y-4 xsm:p-4 md:p-0">
                <div className="h-20 w-20">
                    <Image src={logo} alt="apex logo" width={200} height={200} className="max-w-full"/>
                </div>
                <div>
                <p className="text-sm">Gyaneshwor Tower</p>
                <p className="text-sm">Gyaneshwor, Nepal</p>
                </div>
                <div>
                <div>
                    <span className="font-semibold">Phone</span>
                    <span className="">: +9779842588888</span>
                </div>
                <div>
                    <span className="font-semibold">Email</span>
                    <span>: info@example.com</span>: 
                </div>
                </div>
                </div>
                <div className="flex flex-col space-y-4 xsm:p-4 md:p-0">
                    <h3 className="font-semibold">Useful Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="">Newsletter</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    
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