import Add_users from "../../Components/Addusers/Addusers.jsx"
import "./user.css"
import {useState,useEffect} from "react"
import {CreateIcon,SearchIcon}from "../../icons.js"
import { user_list_call } from "../../ApiCalls";
const Users = () => {
    const [user_List, setUser_List] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
    
    useEffect(()=>{
        user_list_call().then((user_list)=>{
            setUser_List(user_list)
        })
    },[])
    const add_user = () => {
        setCreatePopupVisible(true);
    };
    const Cancel_addUser=()=>{
        setCreatePopupVisible(!isCreatePopupVisible);
    }
    return (
        <div className='users'>
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
                {user_List.length>0 ? (
                    <table className='user-list'>
                        <thead className='user-header'>
                            <tr>
                                <th>User id</th>
                                <th>Company Name</th>
                                <th> User Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {user_List.map((users) => (
                            <tr className='user-Body' key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.company.name}</td>
                                <td>{users.username}</td>
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
                {isCreatePopupVisible && ( <Add_users Cancel={Cancel_addUser}/>)}
            </div>
            </div>
        );
};
export default Users;
