import React,{useState,useRef,useContext} from 'react'
import "./login.css"
import {loginCall} from "../../apicalls.js";
import { AuthContext } from "../../context/AuthContext";
import MailIcon from '@mui/icons-material/Mail';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [PassVisible,SetPassVisible]=useState(false)
    const { isFetching, dispatch, } = useContext(AuthContext);
    const email = useRef();
    const password = useRef();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await loginCall({
                email: email.current.value,
                password: password.current.value,
            }, dispatch);
            if(res.status===400){
                if(res.data.error==="email"){
                    alert("Enter a correct email");
                }
                if(res.data.error==="password"){
                    alert("Enter a correct password");
                    window.location.reload();
                }
            }else{
                dispatch({ type: 'LOGIN_SUCCESS', payload: res });
            }
        }catch (error){
                console.error("Error during login:", error);
        }    
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
                        <input type='email' 
                            placeholder='Enter a email'   
                            required 
                            ref={email}
                        />
                    </div>
                    <div className='password'>
                        <HttpsIcon className='icon'/>
                        <input type={PassVisible ? 'text' : 'password'} 
                            placeholder='Enter a password' 
                            maxLength={16}
                            minLength={8}
                            required
                            ref={password}
                        />
                        <div onClick={handlevisible}>
                            {PassVisible ? <VisibilityIcon/> :<VisibilityOffIcon/>}
                        </div>
                    </div>
                </div>
                <span to="/forgotpassword" className='forgotpass'>Forgot password ?</span>
                <button type="submit" className='button' disabled={isFetching}>{isFetching ? <CircularProgress/> : "Login" }</button>
            </form>
        </div>
    )
}
export default Login