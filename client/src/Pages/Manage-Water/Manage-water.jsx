import "./manage-water.css"
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import WTotalconsumption from "./WTotalconsumption"
import Tanks from "./Tanks"
import WGraph from "./WGraph"
const ManageWater = () => {
    return (
        <> 
            <Topbar/>
            <div className='manage-water'>
                <Sidebar/>
                <div className='manage-water-container'>
                    <WTotalconsumption/>    
                    <div className='manage-water-bottom'>
                        <Tanks/>
                        <WGraph/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageWater
