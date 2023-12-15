import React from 'react'
import "./Sidebar.css"  
import {NavLink} from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TuneIcon from '@mui/icons-material/Tune';
import ChecklistIcon from '@mui/icons-material/Checklist';
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
                <NavLink to="/dashboard" activeClassName="active"> <DashboardIcon className='ListIcons'/> <span>Dashboard</span></NavLink>
                <NavLink to="/industries" activeClassName="active"> <ApartmentIcon className='ListIcons'/> <span>Industries</span></NavLink>
                <NavLink to="/manage-energy" activeClassName="active"> <BoltSharpIcon className='ListIcons'/> <span>Manage Energy</span></NavLink>
                <NavLink to="/manage-water" activeClassName="active"> <WaterDropIcon className='ListIcons'/> <span>Manage Water</span></NavLink>
                <NavLink to="/controls" activeClassName="active"> <TuneIcon className='ListIcons'/> <span>Controls</span></NavLink>
                <NavLink to="/logs" activeClassName="active"> <ChecklistIcon className='ListIcons'/> <span>Logs</span></NavLink>
            </div>
        </div>
    )
}
export default Sidebar