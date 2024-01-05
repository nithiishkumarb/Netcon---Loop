import React from 'react'
import "./Addindustry.css"
import Navbar from '../navbar/Navbar';
import Topbar from '../Topbar/Topbar';
const Addindustry = () => {
    return (
        <div className='add_industry'>
            <Navbar/>
            <div className='add_industrycontainer'>
                <Topbar/>
            </div>
        </div>
    )
}

export default Addindustry