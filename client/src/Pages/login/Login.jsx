import React,{useState} from 'react'
import "./login.css"
// import {Link} from "react-router-dom"
import MailIcon from '@mui/icons-material/Mail';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [PassVisible,SetPassVisible]=useState(false) // eslint-disable-next-line
    const [mail, Setmail]=useState('') // eslint-disable-next-line
    const [password,Setpassword]=useState('')
    const handlesubmit=(e)=>{
        e.preventDefault();
    }
    const handlevisible=()=>{
        SetPassVisible(!PassVisible)
    }
    return (
        <div className='login_bckgrnd'>
            <form className="login_container" onSubmit={handlesubmit}>
                <img className="logs" src="/Assets/logos.png" alt="Netcon Technologies"/>
                <div className="input_container">
                    <div className='mail'>
                        <MailIcon className='icon'/>
                        <input type='email' placeholder='Enter a email'  onChange={(e)=>Setmail(e.target.value)} required />
                    </div>
                    <div className='password'>
                        <HttpsIcon className='icon'/>
                        <input type={PassVisible ? 'text' : 'password'} 
                            placeholder='Enter a password' 
                            maxLength={16}
                            minLength={8}
                            onChange={(e)=>Setpassword(e.target.value)}
                            required
                        />
                        <div onClick={handlevisible}>
                            {PassVisible ? <VisibilityIcon/> :<VisibilityOffIcon/>}
                        </div>
                    </div>
                </div>
                <span to="/forgotpassword" className='forgotpass'>Forgot password ?</span>
                <button type="submit" className='button'>Login</button>
            </form>
        </div>
    )
}
export default Login