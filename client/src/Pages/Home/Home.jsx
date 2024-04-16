import{useState,useEffect} from "react"
import RightBar from "../../Components/RightBar/RightBar.jsx"
import CountUp from "react-countup"
import {Link} from "react-router-dom"
import {WaterDropIcon,ApartmentIcon,BoltSharpIcon} from "../../icons.js"
import {industriesCall,tankscall,generatorcall} from "../../ApiCalls.js"
import { LineChart, Line,Tooltip} from "recharts";
import "./Home.css";
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

const Home = () => {
    const [industries,SetIndustries]=useState(0);
    const [tanks,SetTanks]=useState(0);
    const [generator,SetGenerator]=useState(0);

    useEffect(() => {
        industriesCall().then((response) => {
            SetIndustries(Object.keys(response).length);
        });
        tankscall().then((response)=>{
            SetTanks(Object.keys(response).length);
        })
        generatorcall().then((response)=>{
            SetGenerator(Object.keys(response).length)
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
        <div className='home'>
            <div className='home_main'>
                <h4>Overview</h4>
                <div className='totalCounts_container'>
                    <Link to="/industries" className='count-box' 
                    style={{backgroundColor:'#87C4FF80',border: '1.5px solid rgba(3, 27, 246, 0.25)'}}>
                        <span>Industries</span>
                        <CountUp start={0} end={industries} delay={0}>
                            {({ countUpRef }) => (
                                <h1 ref={countUpRef} style={{color:'#414141'}}>
                                    Total Industries: {industries}
                                </h1>
                            )}
                        </CountUp>
                        <div style={{backgroundColor: '#92BBEB',color:'blue',border:'1px solid blue'}}><ApartmentIcon/></div>
                    </Link>
                    <Link to="/manage-water" className='count-box' 
                    style={{backgroundColor: '#C7E9B0',border: '1.5px solid rgba(114, 186, 98, 0.5)'}}>
                        <span>Water Tanks</span>
                        <CountUp start={0} end={tanks} delay={0}>
                            {({ countUpRef }) => (
                                <h1 ref={countUpRef} style={{color:'#414141'}}>
                                    Total tanks:{tanks}
                                </h1>
                            )}
                        </CountUp>
                        <div style={{backgroundColor: '#7CE36B',color:'green',border:'1px solid green'}}><WaterDropIcon/></div>
                    </Link>
                    <Link to="/manage-energy" className='count-box'
                    style={{ backgroundColor:'#FFDFDF',border:'1.5px solid rgba(169, 71, 141, 0.25)'}}>
                        <span>Generator</span>
                        <CountUp start={0} end={generator} delay={0}>
                            {({ countUpRef }) => (
                                <h1 ref={countUpRef} style={{color:'#414141'}}>
                                    total generator:{generator}
                                </h1>
                            )}
                        </CountUp>
                        <div style={{backgroundColor: '#F796E8',color:'#BF16AE',border:'1px solid #BF16AE'}}><BoltSharpIcon/></div>
                    </Link>
                </div>
        <h4>Consumption</h4>
        <div className='TotalConsumption-container'>
            <Link to="/manage-water" className='TotalConsumption'>
                <span>Water consumption</span>
                <div className='counts_container'>
                    <CountUp start={0} end={129213856} delay={0}>
                    {({ countUpRef }) => (
                        <h1 ref={countUpRef}>Water Consumption</h1>
                    )}
                    </CountUp>
                    <h1 style={{margin:0}}>m³</h1>
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
            <Link to="/manage-energy" className='TotalConsumption'>
                <span>Energy consumption</span>
                <div className='counts_container'>
                    <CountUp start={0} end={12900} delay={0}>
                    {({ countUpRef }) => (
                        <h1 className='total-water' ref={countUpRef}>Total Sales:</h1>
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
        <h4>Location</h4>
        <div className='maps'> 
            {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1695438650245!2d80.20468467335024!3d13.02487301371156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526746efd1a251%3A0xa4c7deb4b05fc267!2sNetcon%20Technologies%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1700652167101!5m2!1sen!2sin" 
                width="730" 
                height="300"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    <RightBar/>
    </div>
    )
}

export default Home