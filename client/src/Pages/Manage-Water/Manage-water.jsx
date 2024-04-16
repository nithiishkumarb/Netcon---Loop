import "./manage-water.css"
import WaterConsumption from "./Water-consumption";
import Tanks from "./Water-Tanks";
import WGraph from "./Water-consumption-Graph"
const ManageWater = () => {
    return (
        <div className="manage-water">
            <div className='manage-water-container'>
                <WaterConsumption/>    
                <div className='manage-water-bottom'>
                    <Tanks/>
                    <WGraph/>
                </div>
            </div>
        </div>
    )
}

export default ManageWater
