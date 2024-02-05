import React from 'react'
import Topbar from "../../Components/Topbar/Topbar.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar"
import "./Controls.css"
const Controls = () => {
  return (
    <div className='controls'>
      <Sidebar/>
      <div className='controls-container'>
        <Topbar/>
      </div>
    </div>
  )
}
export default Controls