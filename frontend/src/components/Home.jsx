import { useState } from 'react';
import SideMenu from './SideMenu'
import CreateProfile from './CreateProfile';
import ProfilesList from './ProfilesList';
import Header from './Header';
import Footer from './Footer';
import UpdateProfile from './UpdateProfile';


function Home() {
    const [currentComponent, setCurrentComponen] = useState('Profiles');
    const [updateComponent, setUpdateComponent] = useState(false);
    const [profileInfo, setProfileInfo] = useState({});

    const changeHandler = (component, info) => {
        setCurrentComponen(component)
        setProfileInfo(info)
        console.log("changeHandler")
        console.log("info", info)

    }

    // const updateHandler = (info) => {
    //     console.log("updaate handler")
    //     console.log("info", info)
    //     setProfileInfo(info)
    //     setUpdateComponent(!updateComponent)

    // }

    return (
        <div className='h-auto flex '>
            <SideMenu changeHandler={changeHandler} />
            <div className=' w-5/6 flex flex-col py-10 px-12 bg-[#F6F8FA] justify-between'>
                <div>
                    <Header currentComponent={currentComponent} />
                    {currentComponent == 'My Profile' ? <CreateProfile profileInfo={profileInfo} changeHandler={changeHandler} /> : <ProfilesList changeHandler={changeHandler} />}
                    {/* {updateComponent ? currentComponent == 'Profiles' ? <ProfilesList updateHandler={updateHandler} changeHandler={changeHandler} /> : <CreateProfile /> : <UpdateProfile updateHandler={updateHandler} profileInfo={profileInfo} />} */}
                </div>
                <div className="h-[1px] w-full mt-8 bg-slate-500" />
                <Footer />
            </div>
        </div>
    )
}

export default Home