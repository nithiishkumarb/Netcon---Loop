import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Topbar from '../../Components/Topbar/Topbar'
import Rightbar from "../../Components/Rightbar/Rightbar.jsx"
import Main from '../../Components/Dashboard-Main/Main';
import "./Dashboard.css";
const Dashboard = () => {
    return (
        <>
            <Topbar/>
            <div className='dashboard'>
                <Sidebar/>
                <Main/>
                <Rightbar/>
            </div>
        </>
    )
}
export default Dashboard 