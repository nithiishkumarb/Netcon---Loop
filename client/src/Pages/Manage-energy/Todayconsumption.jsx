import "./Manage-energy.css"
import {TimelineIcon,AcUnitIcon,LightbulbIcon} from "../../icons"
import CountUp from "react-countup"
const Todayconsumption = () => {
  return (
    <div className='Today-consumption'>
            <h4>Today Consumption</h4>
            <div className='Today-consumption-container'>
              <div className='Today-Overall'>
                <div className='icons icons-overall'>
                    <TimelineIcon/>
                </div>
                  <div className='Today-Overall-Container'>
                    <h5>Overall</h5>
                    <div className="Count">
                      <CountUp start={0} end={12000} delay={0}>
                        {({ countUpRef }) => (
                            <h3 className='overall' style={{color:"rgb(214, 3, 147)"}} ref={countUpRef}>k</h3>
                        )}
                      </CountUp>
                      <h4 style={{marginLeft:5,color:"rgb(214,3,147"}}>w/h</h4>
                    </div>
                  </div>
                </div>
              <div className='Today-HVAC'>
                  <div className='icons icons-hvac'>
                    <AcUnitIcon/>
                  </div>
                  <div className='Today-Overall-Container'>
                    <h5>HVAC</h5>
                    <div className="Count">
                      <CountUp start={0} end={6000} delay={0}>
                        {({ countUpRef }) => (
                            <h3 className='overall' style={{color:"blue"}} ref={countUpRef}>Total Sales:</h3>
                        )}
                      </CountUp>
                      <h4 style={{marginLeft:5,color:"blue"}}>w/h</h4>
                    </div>
                  </div>
              </div>
              <div className='Today-Light'>
                <div className='icons icons-light'>
                  <LightbulbIcon/>
                </div>
                <div className='Today-Overall-Container'>
                  <h5>Light & others</h5>
                  <div className="Count">
                      <CountUp start={0} end={6000} delay={0}>
                        {({ countUpRef }) => (
                            <h3 className='overall' style={{color:"green"}} ref={countUpRef}>Total Sales:</h3>
                        )}
                      </CountUp>
                      <h4 style={{marginLeft:5,color:"green"}}>w/h</h4>
                    </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Todayconsumption