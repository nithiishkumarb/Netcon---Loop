import "./Manage-energy.css"
import TimelineIcon from '@mui/icons-material/Timeline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const Totalconsumption = () => {
  return (
        <div className='Total-consumption'>
            <h3>Total Consumption :</h3>
            <div className='Total-Consumption-container'>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Overall'/>
                <div className='Box-container'>
                  <h4>Overall</h4>
                  <h2>123,123 <span style={{fontSize: "medium"}}>w/h</span></h2>
                </div>
                  <TimelineIcon className='Icons overall'/>
              </div>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Hvac'></div>
                <div className='Box-container'>
                  <h4>HVAC</h4>
                  <h2>13,123 <span style={{fontSize: "medium"}}>w/h</span></h2>
                </div>
                <AcUnitIcon className='Icons hvac'/>
              </div>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Light'/>
                <div className='Box-container'>
                  <h4>Light & Others</h4>
                  <h2>12,723 <span style={{fontSize: "medium"}}>w/h</span>
                  </h2>
                </div>
                    <LightbulbIcon className='Icons light'/>
              </div>
            </div>
          </div>
  )
}

export default Totalconsumption