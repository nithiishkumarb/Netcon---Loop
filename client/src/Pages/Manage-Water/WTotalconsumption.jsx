import TimelineIcon from '@mui/icons-material/Timeline';
import TodayIcon from '@mui/icons-material/Today';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
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
                  <h2>123,123 m³</h2>
                </div>
                  <TimelineIcon className='Icons overall'/>
              </div>
              <div className='Total-WConsumption-box'>
                <div className='Rectangle-design Today'></div>
                <div className='Box-container'>
                  <h4>Today</h4>
                  <h2>13,123 m³</h2>
                </div>
                <TodayIcon className='Icons today'/>
              </div>
              <div className='Total-WConsumption-box'>
                <div className='Rectangle-design Tank'/>
                <div className='Box-container'>
                  <h4>Tanks</h4>
                  <h2>12</h2>
                </div>
                    <WaterfallChartIcon className='Icons tank'/>
              </div>
            </div>
          </div>
  )
}
export default WTotalconsumption