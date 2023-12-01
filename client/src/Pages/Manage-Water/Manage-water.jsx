import React from 'react'
import "./manage-water.css"
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
const ManageWater = () => {
    return (
        <>
            <Topbar/>
            <div className='manage-water'>
                <Sidebar/>
                <div className='manage-water-container'>
                    <h2>Overall :</h2>
                    <div className='manage-water-top'>
                        <div className='Consumption Overall-Consumption'>
                            <h2>Total</h2>
                            <span>123,456,433 m</span>
                            <span>3</span>
                        </div>
                        <div className=' Consumption Today-Consumption'>
                            <h2>Today</h2>
                            <span>123,456,433 m</span>
                            <span>3</span>
                        </div>
                        <div className='Consumption Tanks'>
                            <h2>Tanks</h2>
                            <span>123,456,433 m</span>
                        </div>
                    </div>
                    <div className='manage-water-bottom'>
                        <div className='graph-container'></div>
                        <div className='Table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Tank Id</th>
                                        <th>Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td>1234</td>
                                        <td>Online</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageWater
