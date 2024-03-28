import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactPage = () => {
    return (
        <>
        <section className="bg-slate-800 w-full min-h-[90vh]">
            <div className="flex flex-wrap justify-between max-w-7xl mx-auto">
            <div className="flex flex-col gap-12 text-slate-200 pt-20">
                    <div className="space-y-2">
                        <h2 className="before:absolute  before:w-1/2 before:h-[1px] before:bg-eastern-blue-600 before:top-[120%] before:left-0 after:absolute after:w-1/2 after:h-1 after:bg-eastern-blue-600 after:top-[120%] after:left-0 after:rounded-3xl relative text-3xl inline-block mb-8">Get In Touch</h2>
                        <p className="font-lightweight text-sm leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia consectetur alias delectus aliquid optio.</p>
                    </div>
                    <div className="ml-4 space-y-4">
                        <div className="flex max-w-30 gap-2">
                            <div className="border border-2 w-11 h-11 rounded-full p-2 relative">
                            <span className="absolute top-[30%] left-[25%] text-xl">
                            <FaPhoneAlt /></span>
                            </div>
                            <div>
                                <p className="text-lg uppercase">Phone</p>
                                <p className="text-lg">9842587777</p>
                            </div>
                        </div>
                        <div className="flex max-w-30 gap-2">
                            <div className="border border-2 w-11 h-11 rounded-full p-2 relative">
                            <span className="absolute top-[30%] left-[25%] text-xl">
                            <MdEmail /></span>
                            </div>
                            <div>
                                <p className="text-lg uppercase">Email</p>
                                <p className="text-lg">apex@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex max-w-30 gap-2">
                            <div className="border border-2 w-11 h-11 rounded-full p-2 relative">
                            <span className="absolute top-[30%] left-[25%] text-xl">
                            <FaLocationDot /></span>
                            </div>
                            <div>
                                <p className="text-lg uppercase">Location</p>
                                <p className="text-lg">Gyaneshwor, Kathmandu</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-7 pt-4 pl-2">
                            <a href="#" className=""><span className="text-2xl"><FaFacebook /></span></a>
                            <a href="#" className=""><span className="text-2xl"><FaTwitter /></span></a>
                            <a href="#" className="">
                            <span className="text-2xl"><FaInstagram /></span></a>
                            <a href="#" className=""><span className="text-2xl"><FaLinkedin /></span></a>
                        </div>
                    </div>
            </div>
            <div className="w-3/5">
                <ContactForm />      
          </div>    
            </div>
        </section>    
        </>
    )
}

export default ContactPage;