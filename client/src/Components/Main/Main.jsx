import React,{useState,useEffect} from 'react'
import "./main.css"
import CountUp from "react-countup"
import {Link} from "react-router-dom"
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import {industriesCall,tankscall,generatorcall} from "../../apicalls"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LineChart, Line,Tooltip} from "recharts";
const data = [
    {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400
    },
    {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210
    },
    {
    name: "Page C",
    uv: 3000,
    pv: 9800,
    amt: 2290
    },
    {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
    },
    {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4900,
        amt: 2100
    }
  ];
const Main = () => {
    const [industries,SetIndustries]=useState(0);
    const [tanks,Settanks]=useState(0);
    const [genertor,Setgenerator]=useState(0);
    useEffect(() => {
        industriesCall().then((response) => {
            SetIndustries(Object.keys(response).length);
        });
        tankscall().then((response)=>{
            Settanks(Object.keys(response).length);
        })
        generatorcall().then((response)=>{
            Setgenerator(Object.keys(response).length)
        })
    }, []);
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };
    return (
    <div className='dashboard-main'>
        <h3>Overview</h3>
        <div className='Total-counts'>
            <Link to="/industries" className='content-box industries'>
                <span>Industires</span>
                <CountUp start={0} end={industries} delay={0}>
                    {({ countUpRef }) => (
                        <h1 ref={countUpRef}/>
                    )}
                </CountUp>
                <div className='industries_icons'><ApartmentIcon/></div>
            </Link>
            <Link to="/manage-water" className='content-box Water-storage'>
                <span>Water Tanks</span>
                <CountUp start={0} end={tanks} delay={0}>
                    {({ countUpRef }) => (
                        <h1 ref={countUpRef}/>
                    )}
                </CountUp>
                <div className='Water-storage-icons'><WaterDropIcon/></div>
            </Link>
            <Link to="/manage-energy" className='content-box generator'>
                <span>Generator</span>
                <CountUp start={0} end={genertor} delay={0}>
                    {({ countUpRef }) => (
                        <h1 ref={countUpRef}/>
                    )}
                </CountUp>
                <div className='generator-icons'><BoltSharpIcon/></div>
            </Link>
        </div>
        <h3>Consumption</h3>
        <div className='consumption-container'>
            <Link to="/manage-water" className='consumption'>
                <MoreVertIcon/>
                <span>Water consumption</span>
                <div className='counts_container'>
                    <CountUp start={0} end={129213856} delay={0}>
                    {({ countUpRef }) => (
                        <h1 className='total-water' ref={countUpRef}></h1>
                    )}
                    </CountUp>
                    <h1>m³</h1>
                </div>
                <div className="graph">
                    <LineChart width={275} height={100} data={data}>
                    <Tooltip content={<CustomTooltip />}/>
                    <Line
                        type="monotone"
                        dataKey="pv"
                        strokeWidth={3}
                        stroke="blue"
                        activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
            </Link>
            <Link to="/manage-energy" className='consumption'>
                <MoreVertIcon/>
                <span>Energy consumption</span>
                <div className='counts_container'>
                    <CountUp start={0} end={12900} delay={0}>
                    {({ countUpRef }) => (
                        <h1 className='total-water' ref={countUpRef}></h1>
                    )}
                    </CountUp>
                    <h2>kW</h2>
                </div>
                <div className='graph'>
                    <LineChart className='graph' width={275} height={100} data={data}>
                        <Tooltip content={<CustomTooltip />}/>
                        <Line type="monotone" dataKey="uv" stroke="green" strokeWidth={3} />
                    </LineChart> 
                </div>
            </Link>
        </div>
        <h3>Location</h3>
        <div className='maps'> 
            {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1695438650245!2d80.20468467335024!3d13.02487301371156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526746efd1a251%3A0xa4c7deb4b05fc267!2sNetcon%20Technologies%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1700652167101!5m2!1sen!2sin" 
                width="740" 
                height="300"  
                // allowfullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    )
}
export default Main