import React,{useState,useRef,useContext} from 'react'
import "./login.css"
import "../../style.css"
import {loginCall} from "../../ApiCalls.js";
import { AuthContext } from "../../context/AuthContext";
import {PersonIcon,HttpsIcon,VisibilityIcon,VisibilityOffIcon,CircularProgress} from "../../icons.js"

//Login page
const Login = () => {
    const [PassVisible,SetPassVisible]=useState(false)
    const { isFetching, dispatch, } = useContext(AuthContext);
    const username = useRef();
    const password = useRef();
    //handle a submit
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await loginCall({
                email: username.current.value,
                password: password.current.value,
            }, dispatch);
            if(res.status===400){
                if(res.data.error==="email"){
                    alert("Enter a correct username");
                    username.current.focus();
                }
                if(res.data.error==="password"){
                    alert("Enter a correct password");
                    password.current.focus();
                }
            }else{
                dispatch({ type: 'LOGIN_SUCCESS', payload: res });
            }
        }catch (error){
                console.error("Error during login:", error);
        }    
    }
    //Password visibility eye
    const handle_visible=()=>{
        SetPassVisible(!PassVisible)
    }
    return (
        <div className='login_Background'>
            <form className="login_container" onSubmit={handleSubmit}>
                <img className="logos" src="/Assets/logos.png" alt="Netcon Technologies"/>
                <div className="login_input_container">
                    <div className='mail'>
                        <PersonIcon className='icon'/>
                        <input type='text'
                        className='login_inputField'
                            placeholder='Enter a username'   
                            required 
                            ref={username}
                        />
                    </div>
                    <div className='password'>
                        <HttpsIcon className='icon'/>
                        <input type={PassVisible ? 'text' : 'password'} 
                            className='login_inputField'
                            placeholder='Enter a password' 
                            maxLength={16}
                            minLength={8}
                            required
                            ref={password}
                        />
                        <span onClick={handle_visible}>
                            {PassVisible ? <VisibilityIcon/> :<VisibilityOffIcon/>}
                        </span>
                    </div>
                </div>
                <span to="/forgotPassword" className='forgotPass'>Forgot password ?</span>
                <button type="submit" className='login_Button' disabled={isFetching}>{isFetching ? <CircularProgress/> : "Login" }</button>
            </form>
        </div>
    )
}
export default Login