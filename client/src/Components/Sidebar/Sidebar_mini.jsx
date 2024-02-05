import React from 'react'
import {NavLink} from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import TuneIcon from '@mui/icons-material/Tune';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MenuIcon from '@mui/icons-material/Menu';
import "./Sidebar_mini.css"
const Sidebar_mini=  ({Visible}) =>{
    const visible=()=>{
        Visible();
    }
    return(
        <div className="sidebar_mini">
            {/* <div className='mini_LogoContainer'>
                <img className="mini_Logo" src="/Assets/logo.png" alt='logo'/>
            </div> */}
            <div className="mini_sidebar_menu">
                <MenuIcon className="menuicon" onClick={visible}/>
            </div>
            <div className="sidebar_mini_list">
                <NavLink to="/" activeClassName="active"> <DashboardIcon/></NavLink>
                <NavLink to="/industries" activeClassName="active"> <ApartmentIcon/></NavLink>
                <NavLink to="/users" activeClassName="active"> <PersonAddIcon/></NavLink>
                <NavLink to="/manage-energy" activeClassName="active"> <BoltSharpIcon/></NavLink>
                <NavLink to="/manage-water" activeClassName="active"> <WaterDropIcon/></NavLink>
                <NavLink to="/controls" activeClassName="active"> <TuneIcon/></NavLink>
                {/* <NavLink to="/logs" activeClassName="active"> <ChecklistIcon/></NavLink> */}
            </div>
        </div>
    )
}
export default Sidebar_mini
