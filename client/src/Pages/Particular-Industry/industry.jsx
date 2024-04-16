import React from 'react'
import "./industry.css"
import CountUp from "react-countup";
import Topbar from "../../Components/Topbar/Topbar"
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,Bar
} from "recharts";
const Industry = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
            {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
        },
        {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
        },
        {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
        },
        {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
        },
        {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
        }
    ]
    return (
    <div className="Particular-industry">
            <div className='industry-container'>
            <h4>Water consumption</h4>
                <div className='industry-main-container total'>
                    <div className='total-consumption'>
                        <div className='bar_design'/>
                        <div className='consumption_content'>
                            <h4>Total</h4>
                            <div style={{display:"flex"}}>
                            <CountUp start={0} end={12221234} delay={0}>
                                    {({ countUpRef }) => (
                                        <h2 ref={countUpRef}>k</h2>
                                    
                                    )}
                            </CountUp>
                            <h2>m³</h2>
                        </div>
                        </div>
                    </div>
                    <div className='total-consumption'>
                    <div className='bar_design green'/>
                    <div className='consumption_content'>
                        <h4>Today</h4>
                        <div style={{display:"flex"}}>
                            <CountUp start={0} end={19234} delay={0}>
                                    {({ countUpRef }) => (
                                        <h2 ref={countUpRef}>k</h2>
                                    
                                    )}
                            </CountUp>
                            <h2>m³</h2>
                        </div>
                        </div>
                    </div>
                    <div className='total-consumption ids'>
                    <div className='bar_design blue'/>
                    <div className='consumption_content'>
                        <h4>Tank</h4>
                            <CountUp start={0} end={14} delay={0}>
                                    {({ countUpRef }) => (
                                        <h2 ref={countUpRef}>k</h2>
                                    
                                    )}
                            </CountUp>
                        </div>
                    </div>
                </div>
                <h4>Energy consumption</h4>
                <div className='industry-main-container today'>
                    <div className='total-consumption'>
                    <div className='bar_design'/>
                    <div className='consumption_content'>
                        <h4>Total</h4>
                        <div style={{display:"flex"}}>
                            <CountUp start={0} end={14157684} delay={0}>
                                    {({ countUpRef }) => (
                                        <h2 ref={countUpRef}>k</h2>
                                    
                                    )}
                            </CountUp>
                            <h2>W/h</h2>
                        </div> 
                        </div>
                    </div>
                    <div className='total-consumption'>
                    <div className='bar_design green'/>
                    <div className='consumption_content'>
                        <h4>Today</h4>
                        <div style={{display:"flex"}}>
                            <CountUp start={0} end={16298} delay={0}>
                                    {({ countUpRef }) => (
                                        <h2 ref={countUpRef}>k</h2>
                                    
                                    )}
                            </CountUp>
                            <h2>W/h</h2>
                        </div> 
                        </div>
                    </div>
                    <div className='total-consumption ids'>
                    <div className='bar_design blue'/>
                        <div className='consumption_content'>
                            <h4>Generator</h4>
                            <CountUp start={0} end={16} delay={0}>
                                {({ countUpRef }) => (
                                    <h2 ref={countUpRef}>k</h2>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
                <h4>Graph</h4>
                <div className='consumption-graph'>
                    <div className='Consumptions water-consumption'>
                        <div className='calender-buttons'>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                        <div className='water-consumption-graph'></div>
                        <BarChart width={500} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                    </div>
                    <div className='Consumptions energy-consumption'>
                        <div className='calender-buttons'>
                            <button>Daily</button>
                            <button>Weekly</button>
                            <button>Monthly</button>
                        </div>
                        <div className='Energy-consumption-graph'></div>
                        <BarChart width={500} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                    </div>
                </div>
            </div>
    </div>
)
}
export default Industry