import React, { useState, useEffect } from 'react';
import "./Industries.css";
import '../../style.css'
import { Link } from 'react-router-dom';
import {FileDownloadIcon,SearchIcon,AddCircleOutlineIcon}from "../../icons"
import { industry_listcall, fetchIndustriesPDF } from "../../ApiCalls";
import AddIndustry from "../../Components/Add industry/AddIndustry"

const Industries = () => {
  const [industryList, setIndustryList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleAddIndustry,setVisibleAddIndustry]=useState(false)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  useEffect(() => {
    industry_listcall().then((response) => {
      if (Array.isArray(response.industries)) {
        setIndustryList(response.industries);
      } else {
        setIndustryList([]);
      }
    });
  }, []);

  const filterAndSortIndustries = () => {
    const filteredList = industryList.filter((industry) =>
      industry.Industry_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const sortedList = [...filteredList].sort((a, b) => {
      if (sortConfig.direction === 'asc') {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    });
    return sortedList;
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

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

  const add_industry = () => {
    setVisibleAddIndustry(!visibleAddIndustry);
  };
  
  const filteredAndSortedIndustries = filterAndSortIndustries();
  return (
    <div className='Industries'>
        <div className='Industries-container'>
          <div className='Industries-Top'>
            <h3>Industries</h3>
            <div className='Industry-Searchbar'>
              <input
                placeholder='Search an industry...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchIcon className='Industry-Searchbar-icon' />
            </div>
            <div className="buttons">
              <button onClick={add_industry}><AddCircleOutlineIcon />Add industry</button>
              <button onClick={downloadPDF}><FileDownloadIcon />Download</button>
            </div>
          </div>
          <div className='tables'>
            {filteredAndSortedIndustries.length > 0 ? (
              <table className='Industries-list'>
                <thead className='Industries-header'>
                  <tr>
                    <th>Industry ID</th>
                    <th>Industry Name</th>
                    <th>Generator ID</th>
                    <th>Tank ID</th>
                    <th onClick={() => handleSort('Generator_id')}>
                      Water consumption
                      {sortConfig.key === 'Generator_id' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </th>
                    <th onClick={() => handleSort('Tank_id')}>
                      Energy consumption
                      {sortConfig.key === 'Tank_id' && (
                        <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                      )}
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedIndustries.map((industry) => (
                    <tr className='Industries-Body' key={industry.Industry_ID}>
                      <td>{industry.Industry_ID}</td>
                      <td>{industry.Industry_name}</td>
                      <td>{industry.Generator_id} </td>
                      <td>{industry.Generator_id} </td>
                      <td>{industry.Generator_id} m³</td>
                      <td>{industry.Tank_id}kW</td>
                      <td>
                        <Link className="link_button" to="/industry-netcon">
                          <button className='view_button'>View</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className='no_result'>
                <span>No result found</span>
              </div>
            )}
          </div>
          <div className='visibleIndustry'>
            {visibleAddIndustry && (<AddIndustry add_industry={add_industry}/>)} 
          </div>
        </div>
    </div>  
  );
};

export default Industries;
