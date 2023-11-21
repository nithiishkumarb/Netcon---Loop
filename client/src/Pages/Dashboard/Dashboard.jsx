import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar' // eslint-disable-next-line
import Topbar from '../../Components/Topbar/Topbar'
import "./Dashboard.css"
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Topbar/>
            <Sidebar/>
        </div>
    )
}
export default Dashboard
