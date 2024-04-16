import {useState,useEffect} from 'react'
import {Tanks_listcall} from "../../ApiCalls"
const Tanks = () => {
    const [Tanks,SetTanks]=useState([])
    useEffect(()=>{
        Tanks_listcall().then((response)=>{
            SetTanks(response.data)
        })
    })
    return (
        <div className='Tanks'>
            <h4>Tanks</h4>
            <table className='Tank-list'>
                <thead className='Tank-header'>
                    <tr>
                        <th>Tank Id</th>
                        <th>Tank Location</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Array.isArray(Tanks) && Tanks.length > 0 ? (
                    Tanks.map((tanks, index) => (
                        <tr className='Tank-Body' key={index}>
                        <td>{tanks.Tank_ID}</td>
                        <td>{tanks.Tank_location}</td>
                        <td style={{color:"#1A7C01", fontWeight:"bold"}}>Online</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="4">No tanks data available</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Tanks