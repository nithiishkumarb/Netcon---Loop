import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Topbar from '../../Components/Topbar/Topbar.jsx'
import Rightbar from "../../Components/Rightbar/Rightbar.jsx"
import Main from '../../Components/Main/Main.jsx';
import "./Home.css";
const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className='homecontainer'>
                <Topbar/>
                <div className='home_main'>
                    <Main/>
                    <Rightbar/>
                </div>
            </div>
        </div>
    )
}
export default Home