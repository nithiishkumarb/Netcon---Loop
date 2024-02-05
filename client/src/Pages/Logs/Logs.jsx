import React from 'react'
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"
import "./Logs.css"
const Logs = () => {
  return (
    <div className="Logs">
      <Sidebar/>
      <div className='Logs-Container'>
        <Topbar/>
      </div>
    </div>   
  )
}
export default Logs