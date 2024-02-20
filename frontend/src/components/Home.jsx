import SideMenu from './SideMenu'
import CreateProfile from './CreateProfile';
import ProfilesList from './ProfilesList';
import Header from './Header';
import Footer from './Footer';


function Home() {

    return (
        <div className='h-screen flex '>
            <SideMenu />
            <div className='w-5/6 py-10 px-12 h-[200%] bg-[#F6F8FA] flex flex-col justify-between'>
                <div>
                    <Header />
                    {/* <CreateProfile /> */}
                    <ProfilesList />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home