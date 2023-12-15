import React from 'react'
import "./Manage-energy.css"
const Graph = () => {
  return (
    <div className='Graph-container'>
      <h3>Graph :</h3>
      <div className='Graph-Details' >
        <span>From: <input type='date'/></span>
        <span>To: <input type='date'/></span>
        <button>Submit</button>
        <button>Download</button>
      </div>
      <div className='Graphs'></div>
    </div>
  )
}

export default Graph