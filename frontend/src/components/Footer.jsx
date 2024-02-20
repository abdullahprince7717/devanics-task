import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function footer() {
    return (
        <div className="flex justify-around text-[#827F7F] mt-14">
            <div className="w-48 flex flex-col my-3">
                <div className='flex flex-col justify-around mt-5 space-y-4'>
                    <a href="" className="">Services</a>
                    <a href="" className="">Pricing</a>
                    <a href="" className="">Contact</a>
                </div>
            </div>
            <div className="w-48 flex flex-col my-3">
                <div className='flex flex-col justify-around mt-5 space-y-4'>
                    <a href="" className="">Terms of Services</a>
                    <a href="" className="">Terms of Sales</a>
                    <a href="" className="">Privacy Policy</a>
                </div>
            </div>
            <div className="w-48 flex flex-col my-3">
                <div className='flex flex-col justify-around mt-5 space-y-4'>
                    <a href="" className="">For subject-matter experts</a>
                    <a href="" className="">Help Center</a>
                    <a href="" className="">Information for candidates</a>
                </div>
            </div>
            <div className="w-80 flex flex-col space-y-2">
                <div className='w-full flex justify-between px-5 pb-3'>
                    <FaInstagram size={28} />
                    <FaTwitter size={28} />
                    <FaFacebook size={28} />
                    <FaTwitter size={28} />
                </div>                <p>Subscribe our Newsletters to keep updated yourself with Current Revolution in Fitness Sector.</p>
                <div className='w-5/6 border-2 flex'>
                    <input type="text" placeholder="Email" className="p-5 h-2 bg-white text-black " />
                    <button className="bg-[#06BF97] text-white w-4/5 flex justify-center items-center "><IoIosSend size={24} /></button>
                </div>
            </div>

        </div>
    )
}

export default footer