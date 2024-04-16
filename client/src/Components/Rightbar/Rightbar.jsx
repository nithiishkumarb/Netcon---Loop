import {useState,useEffect} from 'react'
import {industry_listcall} from "../../ApiCalls"
import {Link} from "react-router-dom"
import {KeyboardArrowRightIcon,SearchIcon} from "../../icons"
import "./Rightbar.css"
import  {ArrowDropUpIcon,ArrowDropDownIcon} from "../../icons.js"
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
const RightBar = () => {
  const [industrylist,Setindustrylist]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(()=>{
    industry_listcall().then((response)=>{
      Setindustrylist(response.industries)
    
    })
  },[])
  const filteredIndustries = industrylist.filter((industry) =>
  industry.Industry_name.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div className='Rightbar-container'>
      <div className='searchbar'>
      <input
          placeholder='Search for industries'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className='search-icon'/>
      </div>
      <div className='total-industries'>
        <h4>Total : {filteredIndustries.length}</h4>
        
      </div>
      <div className="industry-sort">
        <p>Energy<UnfoldMoreIcon/></p>
        <p>Water<UnfoldMoreIcon/></p>
      </div>
      <div className='industries-list'>
      {filteredIndustries.length > 0 ? (
          filteredIndustries.map((industry) => (
            <Link className='industry' key={industry.Industry_ID} to="/industry-netcon">
              <h3>{industry.Industry_name}</h3>
              <span>Location: {industry.Industry_place}</span>
              <span>Energy: {industry.Tank_id} kW</span>
              <span>Water: {industry.Generator_id} m³</span>
              <KeyboardArrowRightIcon className='arrow-icon'/>
            </Link>
          ))
        ) : (
          <div className='no-results'>
            <p>No results found</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default RightBar;