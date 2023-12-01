import React from 'react'
import "./Industries.css"
import { Link } from 'react-router-dom'
import Topbar from "../../Components/Topbar/Topbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Industries = () => {
  return (
    <>
      <Topbar/>
      <div className='Industries'>
        <Sidebar/>
        <div className='Industries-container'>
          <div className='Industries-Top'>
            <h2>Industries:</h2>
            <div className='Industry-Searchbar'>
              <SearchIcon/>
              <input placeholder='Search a industry . . .'></input>
            </div>
              <button><AddCircleOutlineIcon/>Add industry</button>
              <button><FileDownloadIcon/>Download</button>
          </div>
            <table className='Industries-list'>
              <thead className='Industries-header'>
                <tr>
                  <th>Si.No.</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className='Industries-Body'>
                  <td>1</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link to="/industry-netcon">view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>2</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>3</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr><tr className='Industries-Body'>
                  <td>4</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr><tr className='Industries-Body'>
                  <td>5</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr><tr className='Industries-Body'>
                  <td>6</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>7</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>8</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>9</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
                <tr className='Industries-Body'>
                  <td>10</td>
                  <td>21345</td>
                  <td>Netcon</td>
                  <td>Chennai</td>
                  <td>online</td>
                  <td><Link>view</Link></td>
                </tr>
              </tbody>
            </table>
            <div className='Industries-PageBtn'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <button>Next</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Industries