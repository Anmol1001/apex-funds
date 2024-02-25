import Image from "next/image";
import contactImage from '../../../public/contact/images.jpg'


const RightContent = () => {
    return(
        <div className="flex flex-col flex-wrap w-1/4">
                    <div className="bg-slate-100 font-semibold text-xl text-eastern-blue-700 mb-5 p-8">
                        Call us at 9842588888
                    </div>
                    <div className="w-full h-48 mb-5">
                        <Image src={contactImage} alt='contact picture' className='w-full h-full'/>
                    </div>
                    <div className="bg-slate-100 text-eastern-blue-700 text-lg p-8 mb-5">
                        <ul className='flex flex-col flex-wrap px-4'>
                            <li className='text-2xl font-extrabold text-eastern-blue-700 mb-3'>Apex Fund Blogs</li>
                            <li><a href="#">Private Equity 1</a></li>
                            <li><a href="#">Private Equity 1</a></li>
                            <li><a href="#">Private Equity 1</a></li>
                            <li><a href="#">Private Equity 1</a></li>
                            <li><a href="#">Private Equity 1</a></li>
                        </ul>
                    </div>
                    <div className="w-full h-48">
                        <Image src={contactImage} alt='contact picture' className='w-full h-full'/>
                    </div>
                </div>
    )
}

export default RightContent;