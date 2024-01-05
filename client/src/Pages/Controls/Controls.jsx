import React from 'react'
import Topbar from "../../Components/Topbar/Topbar.jsx"
import Navbar from "../../Components/navbar/Navbar"
import "./Controls.css"
const Controls = () => {
  return (
    <div className='controls'>
      <Navbar/>
      <div className='controls-container'>
        <Topbar/>
      </div>
    </div>
  )
}

export default Controls