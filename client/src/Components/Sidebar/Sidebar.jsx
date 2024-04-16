import {useState} from "react"
import {NavLink} from "react-router-dom"
import "./Sidebar.css"
import {DashboardIcon,ApartmentIcon,BoltSharpIcon,WaterDropIcon,TuneIcon,PersonAddIcon,MenuIcon,LogoutIcon} from "../../icons.js"
const Sidebar = () => {
    const [visible,SetVisible]=useState(true);
    const AdminSidebarItem=[
        {link:"/", item:"Dashboard",icons:<DashboardIcon/>},
        {link:"/industries", item:"Industries",icons:<ApartmentIcon/>},
        {link:"/users", item:"Users",icons:<PersonAddIcon/>},
        {link:"/manage-energy", item:"Manage Energy", icons:<BoltSharpIcon/>},
        {link:"/manage-water",item:"Manage Water", icons:<WaterDropIcon/>},
        {link:"/controls",item:"Controls", icons:<TuneIcon/>},
        {link:"/login",item:"Logout",icons:<LogoutIcon/>}
    ]
    
    const handleVisible=()=>{
        SetVisible(!visible)
    }
    
    return (
        <div className='sidebar' style={{width: visible ? "60px" : "200px"}}>
            <div className="sidebar_menu">
            {!visible ?
                <div className='LogoContainer'>
                    <img className="Logo" src="/Assets/logo.png" alt='logo'/>
                    <h1 className='LogoName'>netcon</h1>
                </div>
            : null}
                <MenuIcon className="menuIcon" onClick={handleVisible}/>
            </div>
            <div className="sidebarList">
            {AdminSidebarItem.map((items,index)=>(
                <NavLink key={index} to={items.link} style={{width: visible ? "60px" : "200px"}}>
                    <span className='ListIcons'>{items.icons}</span>
                    {!visible ? items.item : null}</NavLink>
            ))}
            </div>
        </div>
    )
}
export default Sidebar