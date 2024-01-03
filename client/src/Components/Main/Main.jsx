import React,{useState,useEffect} from 'react'
import "./main.css"
import {Link} from "react-router-dom"
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import {industriesCall,tankscall,generatorcall} from "../../apicalls"
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
    return (
    <div className='dashboard-main'>
        <h3>Overview</h3>
        <div className='Total-counts'>
            <Link to="/industries" className='content-box industries'>
                <span>Industires</span>
                <h1>{industries}</h1>
                <div className='industries_icons'><ApartmentIcon/></div>
            </Link>
            <Link to="/manage-water" className='content-box Water-storage'>
                <span>Water Tanks</span>
                <h1>{tanks}</h1>
                <div className='Water-storage-icons'><WaterDropIcon/></div>
            </Link>
            <Link to="/manage-energy" className='content-box generator'>
                <span>Generator</span>
                <h1>{genertor}</h1>
                <div className='generator-icons'><BoltSharpIcon/></div>
            </Link>
        </div>
        <h3>Consumption</h3>
        <div className='consumption-container'>
            <Link to="/manage-water" className='consumption'>
                <span>Water consumption</span>
                <h1 className='total-water'>129,213,856 m³</h1>
                <img src="/Assets/graph1.png" alt='graph' className='graph'/>
            </Link>
            <Link to="/manage-energy" className='consumption'>
                <span>Energy consumption</span>
                <h1 className='total-energy'>12,900<span style={{ fontSize: '0.7em' }}>kW</span></h1>    
                <img src="/Assets/graph2.png" alt='graph' className='graph'/>
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