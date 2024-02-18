import logo from "../assets/public/logo.png"
import { FaTasks } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";

function SideMenu() {
    return (
        <div className="h-screen w-1/6 flex flex-col justify-between bg-[#142D52]">
            <div className="flex flex-col">
                <div className="w-1/2 mx-auto my-6">
                    <img src={logo} alt="LOGO" />
                </div>
                <div className="flex flex-col items-start ml-6 mt-6 text-[#CFCFCF] text-lg">

                    <div className="flex items-center my-4">
                        <FaTasks />
                        <span className="ml-4">Tasks</span>
                    </div>
                    <div className="flex items-center my-4">
                        <IoIosCard />
                        <span className=" ml-4">Projects</span>
                    </div>
                    <div className="flex items-center my-4">
                        <IoPerson />
                        <span className="ml-4">Profile</span>
                    </div>
                    <div className="flex items-center my-4">
                        <MdGroups />
                        <span className="ml-4">Teams</span>
                    </div>
                    <div className="flex items-center my-4">
                        <FaSuitcase />
                        <span className="ml-4">Jobs</span>
                    </div>
                </div>
                <div className="h-[1px] w-4/5 mx-auto mt-8 mb-4 bg-[#06BF97]" />
                <p className="w-4/5 mx-auto text-[#9A9A9A] text-center text-xs px-[2px]">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                </p>
            </div>

            <div className="flex justify-center py-10 bg-[#142D52]">
                <button className="text-white text-xs font-semibold rounded-sm p-3 bg-[#06BF97]">
                    Upgrade Now
                </button>
            </div>
        </div>
    )
}

export default SideMenu