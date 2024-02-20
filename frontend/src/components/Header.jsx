/* eslint-disable react/prop-types */
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

import img from "../assets/public/flag.png"
import img1 from "../assets/public/person.jpeg"

function Header(props) {
    return (
        <div className='w-full flex justify-between items-center'>
            <p className="text-[#142D52] font-semibold text-xl">{props.currentComponent}</p>

            <div className="w-1/5 flex justify-between items-center">
                <button className="flex items-center text-xs p-1 font-medium bg-white text-[#BABABA] rounded-md " >
                    <img className="w-5 h-3 mx-1" src={img} alt="flag" />
                    EN
                    <MdKeyboardArrowDown size={23} className="" />
                </button>
                <IoIosNotifications className="text-2xl text-[#BABABA] mx-4" />

                <div className="flex items-center ">
                    <button className="flex items-center text-xs p-1 font-medium  text-[#BABABA] rounded-md " >
                        <img className="w-10 h-8 mx-1 rounded-full" src={img1} alt="flag" />
                        John  Doe
                        <MdKeyboardArrowDown size={23} className="" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header