import React from 'react'
import "./Manage-energy.css"
import Totalconsumption from './Totalconsumption';
import Todayconsumption from './Todayconsumption';
import Graph from './Graph';
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
const ManageEnergy = () => {
  return (
    <>
      <Topbar/> 
      <div className='Manage-energy'>
        <Sidebar/>
        <div className='manage-energy-container'>
          <Totalconsumption/>
          <Todayconsumption/>
          <Graph/>
        </div>
      </div>
    </>
  )
}
export default ManageEnergy