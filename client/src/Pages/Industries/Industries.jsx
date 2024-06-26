import React, { useState, useEffect } from 'react';
import "./Industries.css";
import { Link } from 'react-router-dom';
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/navbar/Navbar";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { industry_listcall,fetchIndustriesPDF } from "../../apicalls";
const Industries = () => {
  const [industryList, setIndustryList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    industry_listcall().then((response) => {
      if (Array.isArray(response)) {
        setIndustryList(response);
      } else {
        setIndustryList([]);
      }
    });
  }, []);

  // Filter industries based on the search query
  const filteredIndustries = industryList.filter((industry) =>
    industry.Industry_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const downloadPDF = async () => {
    try {
      const pdfBlob = await fetchIndustriesPDF();
      const blob = new Blob([pdfBlob], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'industries_list.pdf';
      link.click();
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };
  const add_industry=()=>{
    window.open("/add_industry" , "_blank")
  }

  return (
    <div className='Industries'>
      <Navbar />
      <div className='Industries_container'>
        <Topbar />
        <div className='Industries-container'>
          <div className='Industries-Top'>
            <h2>Industries</h2>
            <div className='Industry-Searchbar'>
              <input
                placeholder='Search an industry...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className='Industry-Searchbar-icon' />
            </div>
            <button onClick={add_industry}><AddCircleOutlineIcon />Add industry</button>
            <button onClick={downloadPDF}><FileDownloadIcon />Download</button>
          </div>
          {
            filteredIndustries.length>0 ? (
              <table className='Industries-list'>
            <thead className='Industries-header'>
              <tr>
                <th>Si.No.</th>
                <th>Industry ID</th>
                <th>Industry Name</th>
                <th>Location</th>
                <th>Generator ID</th>
                <th>Tank ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredIndustries.map((industry, index) => (
                <tr className='Industries-Body' key={industry.Industry_ID}>
                  <td>{index + 1}</td>
                  <td>{industry.Industry_ID}</td>
                  <td>{industry.Industry_name}</td>
                  <td>{industry.Industry_place}</td>
                  <td>{industry.Generator_ID}</td>
                  <td>{industry.Tank_ID}</td>
                  <td><Link to="/industry-netcon">View</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
            ):(
              <div>
                <span>No result found</span>
              </div>
            )
          }
          <div className='Industries-PageBtn'>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
