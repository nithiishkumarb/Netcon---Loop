import "./manage-water.css"
import Topbar from "../../Components/Topbar/Topbar"
import Navbar from "../../Components/navbar/Navbar.jsx"
import WTotalconsumption from "./WTotalconsumption"
import Tanks from "./Tanks"
import WGraph from "./WGraph"
const ManageWater = () => {
    return (
        <div className="manage-water">
            <Navbar/> 
            <div className='manage-water_container'>
                <Topbar/>
                <div className='manage-water-container'>
                    <WTotalconsumption/>    
                    <div className='manage-water-bottom'>
                        <Tanks/>
                        <WGraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageWater
