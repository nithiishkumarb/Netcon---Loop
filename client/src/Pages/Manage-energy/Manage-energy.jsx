import React from 'react'
import "./Manage-energy.css"
import Totalconsumption from './Total-energy-consumption';
import Todayconsumption from './Today-energy-consumption';
import Graph from './Energy-Graph';
const ManageEnergy = () => {
  return (
    <div className='Manage-energy'>
      <div className='manage-energy-container'>
        <Totalconsumption/>
        <Todayconsumption/>
        <Graph/>
      </div>
    </div>
  )
}
export default ManageEnergy