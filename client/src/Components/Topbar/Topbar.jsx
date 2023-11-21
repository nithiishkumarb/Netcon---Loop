import React,{useState} from 'react'
import "./Topbar.css"
import {Link} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Topbar = () => {
    const [visible,SetVisible]=useState(false)
    const handleProfileList=()=>{
        SetVisible(!visible);
    }
    return (
        <div className='Topbar'>
            <div className='TopbarLeft'>
                <img className="logo" src="/Assets/logo.png" alt='logo'/>
                <h1 className='logoname'>Netcon</h1>
            </div>
            <div className='TopbarRight'>
                <Link to="/notification" className='notification-container'>
                    <NotificationsActiveIcon/>
                    <span>1</span>
                </Link>
                <div onClick={handleProfileList} className='Profile'>
                    <AccountCircleIcon/>
                    <span className='userName'>Netcon</span>
                    <ArrowDropDownIcon  className='icons'/>
                </div>
            </div>
            {
                visible ? 
                ( <div className='profileList'>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login">Logout</Link>
                </div>) : null
            }
        </div>
    )
}
export default Topbar