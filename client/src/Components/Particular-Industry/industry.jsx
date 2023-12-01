import React from 'react'
import "./industry.css"
import FlagIcon from '@mui/icons-material/Flag';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
const Industry = () => {
  return (
    <>
        <Topbar/>
        <div className='industrys'>
            <Sidebar/>
            <div className='industry-container'>
                <div className='industry-status'>
                    <span>Consumer: Netcon-Chennai</span>
                    <span>Status: offline</span>
                </div>
                <div className='main-left'>
                    <div className='total-consumption'>
                        <span>Total Water Consumption</span>
                        <div className='Total-water-value'>
                            <h3>12,221,234 m</h3>
                            <spna>3</spna>
                        </div>
                    </div>
                    <div className='total-consumption'>
                        <span>Total Energy Consumption</span>
                        <h3>14,684 W/h</h3>
                    </div>
                    <div className='total-consumption'>
                        <span>Today Water Consumption</span>
                        <h3>12,221,234 m</h3>
                    </div>
                    <div className='total-consumption'>
                        <span>Today Energy Consumption</span>
                        <h3>16,298 W/h</h3>
                    </div>
                </div>
                <div className='industrys-main-right'>
                    <h4>Error Flag Indicator</h4>
                    <ul>
                        <li><FlagIcon/>Generator Fail</li>
                        <li><FlagIcon/>ELCB Trip</li>
                        <li><FlagIcon/>Pump Trip</li>
                        <li><FlagIcon/>Low Water</li>
                        <li><FlagIcon/>Tank Overflow</li>
                        <li><FlagIcon/>Over Load</li>
                    </ul>
                </div>
                <div className='consumption-graph'>
                    <div className='consumption water-consumption'>
                        <div className='calender-buttons'>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                        <div className='water-consumption-graph'></div>
                        <h1>Water consumption</h1>
                    </div>
                    <div className='consumption energy-consumption'>
                        <div className='calender-buttons'>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                        <div className='Energy-consumption-graph'></div>
                        <span>Energy consumption</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Industry