import { useState, useEffect } from 'react'
import axios from 'axios';
import SideMenu from './SideMenu'
import CreateProfile from './CreateProfile';
import ProfilesList from './ProfilesList';
import Header from './Header';
import Footer from './Footer';


function Home() {
    const [profiles, setProfiles] = useState([]);
    const getProfiles = async () => {

        await axios.get('http://localhost:3000/profile/getprofile')
            .then((res) => {
                console.log(res)
                setProfiles(res.data.response);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProfiles();
        console.log("profiles", profiles)
    }, [])
    return (
        <div className='h-screen flex '>
            <SideMenu />
            <div className='w-5/6 py-10 px-12 h-[200%] bg-[#F6F8FA]'>
                <Header />
                <CreateProfile />
                <Footer />
            </div>
        </div>
    )
}

export default Home