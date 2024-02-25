import ContactForm from "./ContactForm";
import RightContent from "./RightSideContent";

const MainContent = () => {
    return (
        <>
        <div className="flex flex-col flex-wrap w-3/4 h-full">
                   <h1 className="font-bold text-2xl text-eastern-blue-700 ">Contact</h1> 
                   <hr className="bg-eastern-blue-500 w-4/6 mb-3"/>
                   <p className='font-light w-4/6 mb-3'>Talk with an advisor to create a customized inbound marketing program that blends proven strategy with tactical instruction and guarentess results.</p>
                   <p className='mb-3'><span className='font-semibold text-eastern-blue-700'>Email: </span> info@example.com.np</p>
                   <p className='mb-3'><span className='font-semibold text-eastern-blue-700'>Phone: </span> 01-4444444</p>
                   <p className='mb-3'><span className='font-semibold text-eastern-blue-700'>Fax: </span> 01-4333333</p>
                   <p className='font-bold text-xl text-eastern-blue-700 mb-3'>What You Get When Asking Your Question</p>
                   <ul className='pl-8 list-disc'>
                    <li className='mb-2'>Less than 12-hour response to your question</li>
                    <li className='mb-2'>Throughness and expertise of a Certified Exchange Specialist</li>
                    <li>Plan of action summarized in an email follow up</li>
                   </ul>
                   <ContactForm />
                </div>
                <RightContent />
        </>
    )
}

export default MainContent;