const ContactForm = () => {
    return(
        <div className="contact-form">
                    <div className='row100 relative w-full'>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <div className='inputBox relative w-full h-10 text-slate-200'>
                                <input className='absolute w-full h-full bg-transparent shadow-none outline-none text-xl py-0 px-3 z-10 text-slate-800' type="text" name='' required/>
                                <span className='text absolute top-0 left-0 leading-10 text-lg py-0 px-3 block duration-500 pointer-events-none'>Full Name</span>
                                <span className='line absolute bottom-0 block w-full h-0.5 bg-slate-200 duration-500 rounded-sm pointer-events-none'></span>
                            </div>
                        </div>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <div className='inputBox relative w-full h-10 text-slate-200'>
                                <input className='absolute w-full h-full bg-transparent shadow-none outline-none text-xl py-0 px-3 z-10 text-slate-800' type="text" name='' required/>
                                <span className='text absolute top-0 left-0 leading-10 text-lg py-0 px-3 block duration-500 pointer-events-none'>Email</span>
                                <span className='line absolute bottom-0 block w-full h-0.5 bg-slate-200 duration-500 rounded-sm pointer-events-none'></span>
                            </div>
                        </div>
                    </div>
                    <div className='row100 relative w-full'>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <div className='inputBox relative w-full h-10 text-slate-200'>
                                <input className='absolute w-full h-full bg-transparent shadow-none outline-none text-xl py-0 px-3 z-10 text-slate-800' type="text" name='' required/>
                                <span className='text absolute top-0 left-0 leading-10 text-lg py-0 px-3 block duration-500 pointer-events-none'>Phone Number</span>
                                <span className='line absolute bottom-0 block w-full h-0.5 bg-slate-200 duration-500 rounded-sm pointer-events-none'></span>
                            </div>
                        </div>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <div className='inputBox relative w-full h-10 text-slate-200'>
                                <input className='absolute w-full h-full bg-transparent shadow-none outline-none text-xl py-0 px-3 z-10 text-slate-800' type="text" name='' required/>
                                <span className='text absolute top-0 left-0 leading-10 text-lg py-0 px-3 block duration-500 pointer-events-none'>Company Name</span>
                                <span className='line absolute bottom-0 block w-full h-0.5 bg-slate-200 duration-500 rounded-sm pointer-events-none'></span>
                            </div>
                        </div>
                    </div>
                    <div className='row100 relative w-full'>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <div className='inputBox textarea relative w-1/2 h-24 py-3 px-0 text-slate-200'>
                                <textarea name="message" className='h-full resize-none absolute w-full bg-transparent shadow-none outline-none text-xl py-1 px-3 z-10 text-slate-800' required></textarea>
                                <span className='text absolute top-0 left-0 leading-10 text-lg py-0 px-3 block duration-500 pointer-events-none'>Your Message</span>
                                <span className='line absolute bottom-0 block w-full h-0.5 bg-slate-200 duration-500 rounded-sm pointer-events-none'></span>
                            </div>
                        </div>
                    </div> 
                    <div className='row100 relative w-full'>
                        <div className='col relative w-full py-0 px-3 mt-7 mr-0 mb-3 duration-500'>
                            <input className='border-none py-2 px-8 cursor-pointer outline-none bg-eastern-blue-700 text-slate-200  text-lg rounded-sm' type="submit" value="Send" />    
                        </div> 
                    </div>      
                   </div>
    )
}

export default ContactForm;