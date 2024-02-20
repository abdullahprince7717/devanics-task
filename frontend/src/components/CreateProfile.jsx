import { useState } from 'react'
import axios from 'axios';
import img from "../assets/public/person.jpeg"


function CreateProfile() {
    const [profileInfo, setProfileInfo] = useState({
        companyName: "",
        companyLogo: "",
        description: "",
        website: "",
        address: "",
        phone: 0,
        city: "",
        country: "",
        zip: 0,
        vatNumber: 0,
        numberOfHires: 0

    });
    const [imageUrl, setImageURL] = useState('')

    const handleInputChange = (field, value) => {
        setProfileInfo((prevProfileInfo) => ({
            ...prevProfileInfo,
            [field]: value,
        }));
    };


    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                const dataURL = reader.result;
                setImageURL(dataURL);
            };

            reader.readAsDataURL(file);
            handleInputChange('companyLogo', event.target.value)
        }
    };

    const createProfile = async () => {
        await axios.post('http://localhost:3000/profile/createprofile', profileInfo)
            .then((res) => {
                console.log(res)
                alert(res?.data.error.details[0].message)
                setProfileInfo({
                    companyName: "",
                    companyLogo: "",
                    description: "",
                    website: "",
                    address: "",
                    phone: 0,
                    city: "",
                    country: "",
                    zip: 0,
                    vatNumber: 0,
                    numberOfHires: 0
                })
            })
            .catch((err) => {
                console.log("err")
                alert(err)
            })
    }

    return (
        <div className='flex flex-col bg-white py-10'>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-400 bg-hero bg-cover">
                <ul className="flex flex-wrap -mb-px">
                    <li className="me-2">
                        <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg  hover:border-[#142D52] ">Profile Details</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col mt-6 px-16'>
                <div className='flex justify-between '>
                    <div className='flex flex-col text-[#9B9B9B] mt-4'>
                        <input value={profileInfo.companyLogo} onChange={handleImageChange} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md cursor-pointer placeholder-[#9B9B9B] focus:outline-none p-[10px] m-1 shadow-sm mb-6" type="file" />
                        <input value={profileInfo.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Company Name' />
                    </div>
                    <div className='flex justify-center max-w-[16%] max-h-36 mr-28 border-2 border-slate-100  rounded-full '>
                        {imageUrl.length > 0 ? <img src={imageUrl} className='rounded-full bg-black' /> : <img src={img} className='rounded-full  bg-black' />}
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col text-[#9B9B9B] '>
                        <input value={profileInfo.website} onChange={(e) => handleInputChange('website', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Website Link' />
                        <input value={profileInfo.address} onChange={(e) => handleInputChange('address', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Enter Address' />
                        <input value={profileInfo.country} onChange={(e) => handleInputChange('country', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Select Country' />
                        <input value={profileInfo.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder="Enter Company's Phone Number" />
                    </div>
                    <div className='flex flex-col text-[#9B9B9B] '>
                        <input onChange={(e) => handleInputChange('numberOfHires', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='No. of hires/Year' type="number" />
                        <input onChange={(e) => handleInputChange('city', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='City' />
                        <input onChange={(e) => handleInputChange('zip', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Enter Zip Code' type="number" />
                        <input onChange={(e) => handleInputChange('vatNumber', e.target.value)} className="w-96 text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='VAT Number' type="number" />
                    </div>
                </div>
                <textarea onChange={(e) => handleInputChange('description', e.target.value)} className="w-full text-sm #9B9B9B border border-gray-300 rounded-md  placeholder-[#9B9B9B] focus:outline-none p-3 m-1 shadow-sm mb-6" placeholder='Write Description here' type="" />

                <div className='flex text-[#7C7C7C] text-sm ml-2'>
                    <input className='mr-3 ' type="checkbox" />
                    <p>Send me occasional emails about CertiJob services</p>
                </div>
                <div className='flex text-[#7C7C7C] text-sm ml-2'>
                    <input className='mr-3 ' type="checkbox" />
                    <p>I agree  to GDPR Compliant. Lorem ipsum dolor sit amet. <span className='text-[#06BF97]'>Read more</span></p>
                </div>
            </div>
            <div className='flex justify-between w-80 mt-10 px-16'>
                <button className="bg-white text-xs font-semibold rounded-sm py-2 px-6 border border-solid  border-[#06BF97] text-[#06BF97]">
                    Cancel
                </button>
                <button onClick={createProfile} className="text-white text-xs font-semibold rounded-sm py-2 px-7 bg-[#06BF97]">
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateProfile