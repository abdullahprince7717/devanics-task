import { useState } from 'react';
import SideMenu from './SideMenu'
import CreateProfile from './CreateProfile';
import ProfilesList from './ProfilesList';
import Header from './Header';
import Footer from './Footer';


function Home() {
    const [currentComponent, setCurrentComponen] = useState('Profiles');

    const changeHandler = (component) => {
        setCurrentComponen(component)
    }

    return (
        <div className='h-auto flex '>
            <SideMenu changeHandler={changeHandler} />
            <div className=' w-5/6 flex flex-col py-10 px-12 bg-[#F6F8FA] justify-between'>
                <div>
                    <Header currentComponent={currentComponent} />
                    {currentComponent == 'My Profile' ? <CreateProfile /> : <ProfilesList />}
                </div>
                <div className="h-[1px] w-full mt-8 bg-slate-500" />
                <Footer />
            </div>
        </div>
    )
}

export default Home