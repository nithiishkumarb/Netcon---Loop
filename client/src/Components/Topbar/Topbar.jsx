import {useState,useContext} from 'react'
import "./Topbar.css"
import {Link,useNavigate} from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from "../../context/AuthContext.js";
const Topbar = () => {
    const [visible,SetVisible]=useState(false)
    const handleProfileList=()=>{
        SetVisible(!visible);
    }
    const { dispatch } = useContext(AuthContext);
    const navigate=useNavigate();
    const handleLogout = () => {
    const islogout=window.confirm("Press ok to logout");
    if(islogout){
    dispatch({ type: 'LOGIN_START' });
    navigate.push('/login');
    }else{
        window.location.reload();
    }}
    return (
        <div className='Topbar'>
            <div className='TopbarRight'>
                <div onClick={handleProfileList} className='Profile'>
                    <AccountCircleIcon/>
                    <ArrowDropDownIcon  className='icons'/>
                </div>
            </div>
            {
                visible ? 
                ( <div className='profileList'>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login" onClick={handleLogout}>Logout</Link>
                </div>) : null
            }
        </div>
    )
}
export default Topbar