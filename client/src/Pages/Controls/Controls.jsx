import React from 'react'
import Topbar from "../../Components/Topbar/Topbar.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar"
const Controls = () => {
  return (
    <>
      <Topbar/>
      <div className='controls-container'>
        <Sidebar/>
      </div>
    </>
  )
}

export default Controls