import React from 'react'
import "./main.css"
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
const Main = () => {
    return (
    <div className='dashboard-main'>
        <span>Overview :</span>
        <div className='Total-counts'>
            <div className='content-box industries'>
                <span>Industires</span>
                <h1>285</h1>
                <div className='icons industries_icons'><ApartmentIcon/></div>
            </div>
            <div className='content-box Water-storage'>
                <span>Water Tanks</span>
                <h1>8</h1>
                <div className='icons Water-storage-icons'><WaterDropIcon/></div>
            </div>
            <div className='content-box generator'>
                <span>Generator</span>
                <h1>16</h1>
                <div className='icons generator-icons'><BoltSharpIcon/></div>
            </div>
        </div>
        <span>Consumption :</span>
        <div className='consumption-container'>
            <div className='consumption water-consumption'>
                <span>Water consumption</span>
                <div className='total-water'>
                    <h1>129,213,856 m</h1>
                    <span>3</span>
                </div>
                <img src="/Assets/graph1.png" alt='graph' className='graph'/>
            </div>
            <div className='consumption energy-consumption'>
                <span>Energy consumption</span>
                <div className='total-energy'>
                    <h1>12,900 <span>KW</span></h1>
                </div>
                <img src="/Assets/graph2.png" alt='graph' className='graph'/>
            </div>
        </div>
        <span>Location :</span>
        <div className='maps'> 
            {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1695438650245!2d80.20468467335024!3d13.02487301371156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526746efd1a251%3A0xa4c7deb4b05fc267!2sNetcon%20Technologies%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1700652167101!5m2!1sen!2sin" 
                width="800" 
                height="300"  
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
    )
}

export default Main