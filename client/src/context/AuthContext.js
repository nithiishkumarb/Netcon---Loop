import { createContext, useEffect, useReducer,useState } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [Id, setId] = useState("");
  
  useEffect(()=>{ 
    localStorage.setItem("user", JSON.stringify(state.user))},[state.user])
  return(
    <AuthContext.Provider
      value={{
        user: state.user,
        Id,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        setId,
      }}>
      {children}
    </AuthContext.Provider>
  )
}