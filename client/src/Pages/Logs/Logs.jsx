import React from 'react'
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
const Logs = () => {
  return (
    <>
        <Topbar/>
        <div className='Logs-Container'>
            <Sidebar/>
        </div>
    </>   
  )
}
export default Logs