import React from 'react'
import "./Manage-energy.css"
import Totalconsumption from './Totalconsumption';
import Todayconsumption from './Todayconsumption';
import Graph from './Graph';
const ManageEnergy = () => {
  return (
    <div className='Manage-energy'>
      <div className='Manage-energy_container'>
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