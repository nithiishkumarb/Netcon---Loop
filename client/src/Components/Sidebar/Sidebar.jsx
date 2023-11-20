import React from 'react'
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TuneIcon from '@mui/icons-material/Tune';
import ChecklistIcon from '@mui/icons-material/Checklist';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='logocontainer'>
                <img className="logo" src="/Assets/logo.png" alt='logo'/>
                <h1 className='logoname'>Netcon</h1>
            </div>
            <div className='profilecontainer'>
                <img className="icon" src="/Assets/user.png" alt='user'/>
                <div className='profile_name'>
                    <h3>Netcon Tech</h3>
                    <h6>Operator</h6>
                </div>
            </div>
            <ul className="sidebarcontainer">
                <li> <DashboardIcon/> <span> Dashboard</span></li>
                <li> <ApartmentIcon/><span>Industries</span></li>
                <li> <BoltSharpIcon/><span>Manage Energy</span></li>
                <li> <WaterDropIcon/><span>Manage Water</span></li>
                <li> <TuneIcon/><span>Controls</span></li>
                <li> <ChecklistIcon/><span>Logs</span></li>
            </ul>
        </div>
    )
}
export default Sidebar