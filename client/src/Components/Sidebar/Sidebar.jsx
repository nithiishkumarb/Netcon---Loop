import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TuneIcon from '@mui/icons-material/Tune';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Login from "../../Pages/login/Login";
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='profilecontainer'>
                <img className="icon" src="/Assets/user.png" alt='user'/>
                <div className='profile-name'>
                    <h3>Netcon Tech</h3>
                    <h6>Operator</h6>
                </div>
            </div>
            <div className="sidebarList">
                <Link to="/dashboard"> <DashboardIcon className='ListIcons'/> <span>Dashboard</span></Link>
                <Link to="/industries"> <ApartmentIcon className='ListIcons'/> <span>Industries</span></Link>
                <Link to="/manage-energy"> <BoltSharpIcon className='ListIcons'/> <span>Manage Energy</span></Link>
                <Link to="/manage-water"> <WaterDropIcon className='ListIcons'/> <span>Manage Water</span></Link>
                <Link to="/controls"> <TuneIcon className='ListIcons'/> <span>Controls</span></Link>
                <Link to="/login" element={<Login/>}> <ChecklistIcon className='ListIcons'/> <span>Logs</span></Link>
            </div>
        </div>
    )
}
export default Sidebar