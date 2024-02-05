import TimelineIcon from '@mui/icons-material/Timeline';
import TodayIcon from '@mui/icons-material/Today';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CountUp from "react-countup";
import "./manage-water.css"
const WTotalconsumption = () => {
  return (
        <div className='Total-Wconsumption'>
            <h3>Total Consumption</h3>
            <div className='Total-WConsumption-container'>
              <div className='Total-WConsumption-box'>
                <div className='Rectangle-design Overall'/>
                <div className='Box-container'>
                  <h4>Overall</h4>
                  <div className='Counts'>
                    <CountUp start={0} end={123123} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                    <h2 style={{marginLeft:6}}>m³</h2>
                  </div>
                </div>
                  <TimelineIcon className='Icons overall'/>
              </div>
              <div className='Total-WConsumption-box'>
                <div className='Rectangle-design Today'></div>
                <div className='Box-container'>
                  <h4>Today</h4>
                  <div className='Counts'>
                    <CountUp start={0} end={13123} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                    <h2 style={{marginLeft:6}}>m³</h2>
                  </div>
                </div>
                <TodayIcon className='Icons today'/>
              </div>
              <div className='Total-WConsumption-box'>
                <div className='Rectangle-design Tank'/>
                <div className='Box-container'>
                  <h4>Tanks</h4>
                  <CountUp start={0} end={7} delay={0}>
                      {({ countUpRef }) => (
                          <h2 ref={countUpRef}></h2>
                      )}
                    </CountUp>
                </div>
                    <WaterfallChartIcon className='Icons tank'/>
              </div>
            </div>
          </div>
  )
}
export default WTotalconsumption