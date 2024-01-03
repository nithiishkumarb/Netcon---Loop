import React from 'react'
import "./Manage-energy.css"
import Totalconsumption from './Totalconsumption';
import Todayconsumption from './Todayconsumption';
import Graph from './Graph';
import Topbar from "../../Components/Topbar/Topbar"
import Navbar from "../../Components/navbar/Navbar.jsx"
const ManageEnergy = () => {
  return (
    <div className='Manage-energy'>
      <Navbar/>
      <div className='Manage-energy_container'>
        <Topbar/> 
        <div className='manage-energy-container'>
          <Totalconsumption/>
          <Todayconsumption/>
          <Graph/>
        </div>
      </div>
    </div>
  )
}
export default ManageEnergy