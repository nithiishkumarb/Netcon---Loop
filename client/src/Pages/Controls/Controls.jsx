import React from 'react'
import Topbar from "../../Components/Topbar/Topbar.jsx"
import Navbar from "../../Components/navbar/Navbar"
const Controls = () => {
  return (
    <>
      <Topbar/>
      <div className='controls-container'>
        <Navbar/>
      </div>
    </>
  )
}

export default Controls