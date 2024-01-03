import React,{useState,useEffect} from 'react'
import {industry_listcall} from "../../apicalls"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Rightbar.css"
const Rightbar = () => {
  const [industrylist,Setindustrylist]=useState([])
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(()=>{
    industry_listcall().then((response)=>{
      Setindustrylist(response)
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
      <div className='industries-list'>
      {filteredIndustries.length > 0 ? (
          filteredIndustries.map((industry) => (
            <div className='industry' key={industry.Industry_ID}>
              <h3>{industry.Industry_name}</h3>
              <span>Location: {industry.Industry_place}</span>
              <span>Tank ID: {industry.Tank_ID}</span>
              <span>DG ID: {industry.Generator_ID}</span>
              <Link to="/industry-netcon">
                <KeyboardArrowRightIcon className='arrow-icon' />
              </Link>
            </div>
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
export default Rightbar;