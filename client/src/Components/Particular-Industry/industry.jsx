import React from 'react'
import "./industry.css"
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
const Industry = () => {
    return (
    <div className="Particular-industry">
        <Sidebar/>
        <div className='industrys'>
            <Topbar/>
            <div className='industry-container'>
                <div className='industry-status'>
                    <h4>Consumer: <span>Netcon-Chennai</span></h4>
                    <h4>Status: <span>online</span></h4>
                </div>
                <div className='Industry-main'>
                    <div className='industry-main-left'>
                        <div className='total-consumption'>
                            <h4>Overall Water Consumption</h4>
                            <h2>12,221,234 m³</h2>
                        </div>
                        <div className='total-consumption'>
                            <h4>Overall Energy Consumption</h4>
                            <h2>14,157,684 W/h</h2>
                        </div>
                        <div className='total-consumption'>
                            <h4>Today Water Consumption</h4>
                            <h2>19,234 m³</h2>
                        </div>
                        <div className='total-consumption'>
                            <h4>Today Energy Consumption</h4>
                            <h2>16,298 W/h</h2>
                        </div>
                    </div>
                    <div className='industry-main-right'>
                        <h4>Error Flag Indicator</h4>
                        <ul>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>Generator Fail</li>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>ELCB Trip</li>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>Pump Trip</li>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>Low Water</li>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>Tank Overflow</li>
                            <li><EmojiFlagsIcon className="FlagsIcon"/>Over Load</li>
                        </ul>
                    </div>
                </div>
                <div className='consumption-graph'>
                    <div className='Consumptions water-consumption'>
                        <div className='calender-buttons'>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                        <div className='water-consumption-graph'></div>
                        <span>Water consumption</span>
                    </div>
                    <div className='Consumptions energy-consumption'>
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
    </div>
  )
}

export default Industry