import {useRef,useState,useEffect} from 'react'
import "./addusers.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ErrorIcon from '@mui/icons-material/Error';
import {industry_listcall,create_User_Call} from "../../ApiCalls"
const Add_users = ({Cancel}) => {
    const role=useRef();
    const industry=useRef();
    const name=useRef();
    const password=useRef();
    const confirm_pass=useRef();
    const [PassVisibile,setPassVisible]=useState(false)
    const [ConformPassVisibile,setConformPassVisible]=useState(false)
    const [IndustryList,setIndustryList]=useState([]);
    const [IndustryDisabled,setIndustryDisabled]=useState(true)
    const [correct_Pass,setCorrect_pass]=useState(false)
    useEffect(()=>{
        industry_listcall().then((res)=>{
            setIndustryList(res.industries)
        })
    },[])
    const handleUserSubmit=(e)=>{
        e.preventDefault();
        const credential={
            role:role.current.value,
            industry:industry.current.value,
            name:name.current.value,
            password:password.current.value,
            confirm_password:confirm_pass.current.value
        }
        if(password.current.value === confirm_pass.current.value){
            create_User_Call(credential).then((response)=>{
                console.log(response)
            })
        }else{
            setCorrect_pass(!correct_Pass)
            confirm_pass.current.focus();
        }
    }
    const handleRoleChanges=()=>{
        if(role.current.value==="user"){
            setIndustryDisabled(false)
        }else{
            setIndustryDisabled(true)
        }
    }
    return (
        <div className="add-users">
            <form className="add_users_input_field" onSubmit={handleUserSubmit}>
                <h3>ADD USER</h3>   
                <div className='add_users_input'>
                    <label htmlFor="role">Choose a Role :</label>
                    <select ref={role} onChange={handleRoleChanges} required>
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="add_users_input">
                    <label htmlFor="industry">Choose an industry:</label>
                    <select name="industry" ref={industry} disabled={IndustryDisabled} required>
                        <option value="">Select an industry</option>
                        {
                        IndustryList.map((industry,index)=>
                            <option value={industry.Industry_name} key={index}>{industry.Industry_name}</option>
                            )
                        }
                    </select>
                </div>
                <div className='add_users_input'>
                    <label>Name :</label>
                    <input ref={name} type="text" placeholder="Enter a Name" required pattern="[a-zA-Z]+"/>
                </div>
                <div className='add_users_input'>
                    <label>Password :</label>
                    <input 
                        ref={password}
                        type={PassVisibile ? "text" :"password"}
                        placeholder="Enter a Password" required minLength={4} />
                    <span style={{cursor:"pointer"}} onClick={()=>setPassVisible(!PassVisibile)}>
                        {PassVisibile ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </span>
                </div>
                <div className='add_users_input'>
                    <label>Confirm password :</label>
                    <input style={{borderColor: correct_Pass ? "rgb(201, 21, 21)" : "initial"}}
                        ref={confirm_pass} 
                        type={ ConformPassVisibile? "text": "password"} 
                        placeholder="Enter a Confirm Password" required minLength={4} />
                    <span style={{cursor:"pointer"}} onClick={()=>setConformPassVisible(!ConformPassVisibile)}>
                    {ConformPassVisibile ? <VisibilityIcon/> : <VisibilityOffIcon/>}
                    </span>
                </div>
                {correct_Pass &&
                    <div className='wrongpass_alert'>
                    <ErrorIcon/>
                    <p style={{marginLeft:"5px"}}>Please enter a correct password</p>
                </div>
                }
                <div className="addusers_buttons">
                    <button style={{background:"green"}}>Submit</button>
                    <button style={{background:"rgb(201, 21, 21)"}} onClick={Cancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default Add_users