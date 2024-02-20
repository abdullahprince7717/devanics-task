import { useState, useEffect } from 'react'
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';

function ProfilesList() {

    const [isTab, setIsTab] = useState('active');
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);

    const changeTab = (currentTab) => {
        setIsTab(currentTab)
    }
    const getProfiles = async () => {

        await axios.get('http://localhost:3000/profile/getprofile')
            .then((res) => {
                console.log(res)
                const profilesWithIsArchived = res.data.response.map((profile) => ({
                    ...profile,
                    isArchived: false,
                }));
                setProfiles([...profilesWithIsArchived]);
                // setProfiles([{ ...res.data.response, isArchived: false }]);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteProfile = async (id) => {
        await axios.delete(`http://localhost:3000/profile/deleteprofile?profileId=${id}`)
            .then((res) => {
                console.log(res)
                getProfiles();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const setArchive = (profileId) => {
        const profileIndex = profiles.findIndex((profile) => profile.profileId === profileId);

        if (profileIndex !== -1) {
            const updatedProfiles = [...profiles];

            updatedProfiles[profileIndex] = {
                ...updatedProfiles[profileIndex],
                isArchived: true,
            };
            setProfiles(updatedProfiles);
        }
    };

    useEffect(() => {
        getProfiles();
        console.log("profiles", profiles)
    }, [])


    return (
        <div className='flex flex-col bg-white py-10'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-400 bg-hero bg-cover">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <a onClick={() => changeTab('active')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:border-[#142D52] focus:text-[#142D52] focus:font-bold focus:border-[#142D52]">Active</a>
                    </li>
                    <li className="me-2">
                        <a onClick={() => changeTab('archive')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:border-[#142D52] focus:text-[#142D52] focus:font-bold focus:border-[#142D52] ">Archive</a>
                    </li>
                </ul>
            </div>

            {isTab == 'active' ?
                (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right  ">
                        <thead className="text-xs">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    No of Hires/year
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Website
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles?.filter((profile) => !profile?.isArchived).map((profile) => (
                                <tr
                                    key={profile?.profileId}
                                    className="odd:bg-[#F4F8FB]  even:bg-white "
                                >
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {profile?.profileId}
                                    </td>
                                    <td className="px-6 py-4">{profile?.companyName}</td>
                                    <td className="px-12 py-4">{profile?.numberOfHires}</td>
                                    <td className="px-6 py-4">{profile?.city}</td>
                                    <td className="px-6 py-4">{profile?.website}</td>
                                    <td className="px-6 py-4 flex">
                                        <a
                                            href="#"
                                            className="text-2xl text-[#06BF97]  hover:underline"
                                        >
                                            <IoArchiveOutline />
                                        </a>
                                        <a
                                            onClick={() => { deleteProfile(profile?.profileId) }}
                                            className="text-[25px] text-[#EB5757]  hover:underline"
                                        >
                                            <MdDeleteOutline />
                                        </a>
                                        <a
                                            onClick={() => { setArchive(profile?.profileId) }}
                                            className="text-2xl text-black  hover:underline"
                                        >
                                            <FaRegEdit />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
                : (<div className="flex justify-center items-center">No archived Data</div>)
            }

            <div className='flex justify-end px-5 pt-5'>
                <div className="flex justify-center items-center space-x-4">
                    <MdKeyboardArrowLeft size={24} className="text-slate-500" />
                    <div className="text-slate-500"> <span className='p-2 px-3 border border-slate-100 shadow-sm'>{currentPage}</span>  of {totalPages}</div>
                    <MdKeyboardArrowRight size={24} className="text-slate-500" />
                </div>
            </div>
        </div>
    )
}

export default ProfilesList