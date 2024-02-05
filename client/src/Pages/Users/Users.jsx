import Topbar from "../../Components/Topbar/Topbar.jsx"
import Sidebar from "../../Components/Sidebar/Sidebar.jsx"
import "./user.css"
import { useRef } from "react"
import {useState,useEffect} from "react"
// import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import { industry_listcall } from "../../apicalls";
const Users = () => {
    const [industryList, setIndustryList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
    const user_name=useRef();
    const name=useRef();
    const password=useRef();
    const confirm_pass=useRef();
    const role=useRef();
    const industry=useRef();
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

    const add_user = () => {
        setCreatePopupVisible(true);
    };
    const handleusersubmit=(e)=>{
        e.preventDefault();
        // console.log(`${user_name.current.value} and ${role.current.value}`)
    }
    return (
        <div className='users'>
            <Sidebar/>
            <div className='users_container'>
                <Topbar/>
                <div className='user-container'>
                <div className='user-Top'>
                    <h3>Users</h3>
                    <div className='user-Searchbar'>
                        <input
                        placeholder='Search an user...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <SearchIcon className='user-Searchbar-icon' />
                    </div>
                    <button onClick={add_user} className="create_button"><CreateIcon style={{width:18,height:18}}/>Create new user</button>
                </div>
                <div className="tables">
                {filteredIndustries.length>0 ? (
                    <table className='user-list'>
                        <thead className='user-header'>
                            <tr>
                                <th>User id</th>
                                <th>User name</th>
                                <th>Name</th>
                                <th>Industry Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {filteredIndustries.map((industry) => (
                            <tr className='user-Body' key={industry.Industry_ID}>
                                <td>123</td>
                                <td>Netcon</td>
                                <td>Nithish Kumar</td>
                                <td>{industry.Industry_name}</td>
                                <td className="action_icons">
                                <button className="edit_button">Edit</button>
                                <button className="delete_button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                ):(
                    <div className="no_result">
                        <span>No result found</span>
                        </div>
                    )}
                </div>
                </div>
                <div>
                {isCreatePopupVisible && (
                    <div className="create_popup">
                    <div className="close_icon_container">
                        <CloseIcon className="close_icon" onClick={() => setCreatePopupVisible(false)} />
                    </div>
                    <h3>ADD USER</h3>
                    <form className="input_field" onSubmit={handleusersubmit}>
                        <label>User Name *</label>
                        <input ref={user_name} type="text" placeholder="User Name" />
                        <label>Name *</label>
                        <input ref={name} type="text" placeholder="Name" />
                        <label>Password *</label>
                        <input ref={password} type="password" placeholder="Password" />
                        <label>Confirm password *</label>
                        <input ref={confirm_pass} type="password" placeholder="Retype Password" />
                        <label htmlFor="role">Choose a Role</label>
                        <select ref={role}>
                            <option>-- Select a Role --</option>
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                        <label htmlFor="industry">Choose an industry:</label>
                        <select name="industry" ref={industry}>
                        <option value="">-- Select an industry --</option>
                        <option value="volvo">A</option>
                        </select>
                        <button>Submit</button>
                    </form>
                    </div>
                )}
            </div>
            </div>
            </div>
        );
};
export default Users;
