import { useState, useEffect } from 'react'
import axios from 'axios';
import SideMenu from './SideMenu'


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
    }, [profiles])
    return (
        <div className='h-screen w-screen '>
            <SideMenu />
        </div>
    )
}

export default Home