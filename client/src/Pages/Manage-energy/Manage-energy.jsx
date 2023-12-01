import React from 'react'
import "./Manage-energy.css"
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
const ManageEnergy = () => {
  return (
    <>
      <Topbar/>
      <div className='Manage-energy'>
        <Sidebar/>
        <div className='manage-energy-container'>
          <div className='Total-consumption-container'>
            <h2>Overall Consumption :</h2>
            <div className='Overallconsumption'>
              <div className='TotalConsumption Total'>
                <h4>Total</h4>
                <span>123123 W/h</span>
              </div>
              <div className='TotalConsumption HVAC'>
                <h4>HVAC</h4>
                <span>123123 W/h</span>
              </div>
              <div className='TotalConsumption Light'>
                <h4>Light & Others</h4>
                <span>123123 W/h</span>
              </div>
            </div>
          </div>
          <div className='Today-consumption'>
            <h2>Today Consumption :</h2>
            <div className='Today-consumption-container'>
              <div className=' Today Today-overall'>
                  <h4>Total</h4>
                  <span>12,000 W/h</span>
              </div>
              <div className='Today Today-HVAC'>
                <h4>HVAC</h4>
                  <span>12,000 W/h</span>
              </div>
              <div className='Today Today-Light&Others'>
                <h4>Light & others</h4>
                  <span>12,000 W/h</span>
              </div>
            </div>
          </div>
          <div className='Graph-container'>
            <h2>Graph :</h2>
            <div className='Graph-calender'>
              <h5>From { }</h5>
              <h5>To { }</h5>
              <button>Submit</button>
              <button>Download</button>
            </div>
            <div className='Graphs'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageEnergy