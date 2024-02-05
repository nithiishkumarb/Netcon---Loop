import "./Manage-energy.css"
import TimelineIcon from '@mui/icons-material/Timeline';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CountUp from "react-countup"
const Totalconsumption = () => {
  return (
        <div className='Total-consumption'>
            <h3>Total Consumption</h3>
            <div className='Total-Consumption-container'>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Overall'/>
                <div className='Box-container'>
                  <h4>Overall</h4>
                  <div className='Counts'>
                    <CountUp start={0} end={55846} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                    <h2 style={{marginLeft:6}}>w/h</h2>
                  </div>
                </div>
                  <TimelineIcon className='Icons overall'/>
              </div>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Hvac'></div>
                <div className='Box-container'>
                  <h4>HVAC</h4>
                  <div className='Counts'>
                    <CountUp start={0} end={43123} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                    <h2 style={{marginLeft:6}}>w/h</h2>
                  </div>
                </div>
                <AcUnitIcon className='Icons hvac'/>
              </div>
              <div className='Total-Consumption-box'>
                <div className='Design-Box Light'/>
                <div className='Box-container'>
                  <h4>Light & Others</h4>
                  <div className='Counts'>
                    <CountUp start={0} end={12723} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                    <h2 style={{marginLeft:6}}>w/h</h2>
                  </div>
                </div>
                    <LightbulbIcon className='Icons light'/>
              </div>
            </div>
          </div>
  )
}

export default Totalconsumption