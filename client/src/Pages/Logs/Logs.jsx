import React from 'react'
import Topbar from "../../Components/Topbar/Topbar"
import Navbar from "../../Components/navbar/Navbar.jsx"
import "./Logs.css"
const Logs = () => {
  return (
    <div className="Logs">
      <Navbar/>
      <div className='Logs-Container'>
        <Topbar/>
      </div>
    </div>   
  )
}
export default Logs