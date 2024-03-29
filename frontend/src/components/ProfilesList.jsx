/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { IoArchiveOutline } from "react-icons/io5";
import { MdDeleteOutline, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineUnarchive } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { setInitialProfiles, archiveProfile, unArchiveProfile } from '../redux/profileActions';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';

function ProfilesList(props) {

    const [isTab, setIsTab] = useState('active');
    const [profiles, setProfiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const dispatch = useDispatch();
    const activeProfiles = useSelector(state => {
        return state.activeProfiles
    });
    const archiveProfiles = useSelector(state => {
        return state.archiveProfiles
    });

    const changeTab = (currentTab) => {
        setIsTab(currentTab)
    }
    const getProfiles = async () => {

        await axios.get(`http://localhost:3000/profile/getprofile?pageNo=${currentPage}&limit=${pageLimit}`)
            .then((res) => {
                console.log(res)
                const profilesWithIsArchived = res.data.response.map((profile) => ({
                    ...profile,
                    isArchived: false,
                }));
                setProfiles([...profilesWithIsArchived]);
                setTotalPages(Math.ceil(res.data.count / pageLimit));
                // dispatch(setInitialProfiles(profilesWithIsArchived));
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
        console.log("activeProfiles", activeProfiles)

        if (profileIndex !== -1) {
            const updatedProfiles = [...profiles];

            updatedProfiles[profileIndex] = {
                ...updatedProfiles[profileIndex],
                isArchived: true,
            };
            // dispatch(unArchiveProfile(updatedProfiles));
            // dispatch(archiveProfile(updatedProfiles));
            setProfiles(updatedProfiles);
        }
    };

    const setUnArchive = (profileId) => {
        const profileIndex = profiles.findIndex((profile) => profile.profileId === profileId);

        if (profileIndex !== -1) {
            const updatedProfiles = [...profiles];

            updatedProfiles[profileIndex] = {
                ...updatedProfiles[profileIndex],
                isArchived: false,
            };
            // dispatch(unArchiveProfile(updatedProfiles));
            // dispatch(activeProfiles(updatedProfiles));
            setProfiles(updatedProfiles);
        }
    };

    const nextPage = () => {
        console.log("next")
        setCurrentPage(currentPage == totalPages ? currentPage : currentPage + 1);

    }

    const previousPage = () => {
        console.log("prev")
        setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);

    }

    useEffect(() => {
        getProfiles();
    }, [currentPage])


    return (
        <div className='flex flex-col bg-white py-5'>
            <div className="flex justify-between text-sm font-medium text-center text-gray-500 border-b border-gray-400 bg-hero bg-cover">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <a onClick={() => changeTab('active')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:border-[#142D52] hover:text-[#142D52]  focus:text-[#142D52] focus:font-bold focus:border-[#142D52]">Active</a>
                    </li>
                    <li className="me-2">
                        <a onClick={() => changeTab('archive')} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:border-[#142D52] hover:text-[#142D52] focus:text-[#142D52] focus:font-bold focus:border-[#142D52] ">Archive</a>
                    </li>
                </ul>

                <button onClick={() => { props?.changeHandler('My Profile') }} className="text-white text-xs font-semibold rounded-sm py-1 px-14 mr-7 mb-2 mt-1 bg-[#06BF97]">
                    Create Profile
                </button>
            </div>

            {isTab == 'active' ?
                (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right  ">
                        <thead className="text-xs">
                            <tr>
                                <th onClick={setArchive} scope="col" className="px-6 py-3">
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
                                            onClick={() => { setArchive(profile?.profileId) }}
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
                                            onClick={() => { props.changeHandler('My Profile', profile) }}
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
                : (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {profiles && profiles.filter((profile) => profile.isArchived).length > 0 ? (
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
                                {profiles?.filter((profile) => profile?.isArchived).map((profile) => (
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
                                                onClick={() => { setUnArchive(profile?.profileId) }}
                                                className="text-2xl text-[#06BF97]  hover:underline "
                                            >
                                                <MdOutlineUnarchive />
                                            </a>
                                            <a
                                                onClick={() => { deleteProfile(profile?.profileId) }}
                                                className="text-[25px] text-[#EB5757]  hover:underline"
                                            >
                                                <MdDeleteOutline />
                                            </a>
                                            <a
                                                onClick={() => { props.changeHandler('My Profile', profile) }}
                                                className="text-2xl text-black  hover:underline"
                                            >
                                                <FaRegEdit />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-center text-gray-500 mt-8">No archived data</div>
                    )}
                </div>)
            }

            <div className='flex justify-end px-5 pt-5'>
                <div className="flex justify-center items-center space-x-4">
                    <MdKeyboardArrowLeft onClick={previousPage} size={24} className="text-slate-500 cursor-pointer" />
                    <div className="text-slate-500"> <span className='p-2 px-3 border border-slate-100 shadow-sm'>{currentPage}</span>  of {totalPages}</div>
                    <MdKeyboardArrowRight onClick={nextPage} size={24} className="text-slate-500 cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default ProfilesList