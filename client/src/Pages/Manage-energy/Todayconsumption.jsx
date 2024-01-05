import "./Manage-energy.css"
import TimelineIcon from '@mui/icons-material/Timeline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
const Todayconsumption = () => {
  return (
    <div className='Today-consumption'>
            <h3>Today Consumption</h3>
            <div className='Today-consumption-container'>
              <div className='Today-Overall'>
                <div className='icons icons-overall'>
                    <TimelineIcon/>
                </div>
                  <div className='Today-Overall-Container'>
                    <h5>Overall</h5>
                    <h3 className='overall'>12,000 <span Style="font-size: medium">w/h</span></h3>
                  </div>
              </div>
              <div className='Today-HVAC'>
                  <div className='icons icons-hvac'>
                    <AcUnitIcon/>
                  </div>
                  <div className='Today-Overall-Container'>
                    <h5>HVAC</h5>
                    <h3 className='hvac'>6,000 <span Style="font-size: medium">w/h</span></h3>
                  </div>
              </div>
              <div className='Today-Light'>
                <div className='icons icons-light'>
                  <LightbulbIcon/>
                </div>
                <div className='Today-Overall-Container'>
                  <h5>Light & others</h5>
                  <h3 className='light'>6,000 <span Style="font-size: medium">w/h</span></h3>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Todayconsumption