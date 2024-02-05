import axios from "axios";

//Login API call
export const loginCall = async (userCredential,dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try{
    const res = await axios.post("http://localhost:6001/api/user/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      return res.data
  } catch(err){ 
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      return err.response
  }
}

//Industries API call
export const industriesCall= async()=>{
  try{
    const res=await axios.get("http://localhost:6001/api/dashboard/industries");
    return res.data.data
  }catch(err){
    return err
  }
}

//Tanks API call
export const tankscall=async()=>{
  try{
    const res=await axios.get("http://localhost:6001/api/dashboard/tanks");
    return res.data.data
  }catch(err){
    return err
  }
}

//Generator API call
export const generatorcall=async()=>{
  try{
    const res=await axios.get("http://localhost:6001/api/dashboard/generator");
    return res.data.data
  }catch(err){
    return err
  }
}

//Rightbar Industry_List
export const industry_listcall=async()=>{
  try{
    const res=await axios.get("http://localhost:6001/api/dashboard/industries_list");
    return res.data
  }catch(err){
    return err
  }
}

//Download industry-List
export const fetchIndustriesPDF = async () => {
  try {
    const response = await axios.get('http://localhost:6001/api/industries/download', {
      responseType: 'blob', 
    });
    return response.data;
  } catch (error) {
      console.error('Error fetching industries PDF:', error);
      throw error;
  }
};

export const Tanks_listcall=async()=>{
  try{
    const response=await axios.get('http://localhost:6001/api/managewater/tankslist')
    return response.data
  }catch(err){
    return err
  }
}

export const Industry_add_call=async(data)=>{
  try{
    const response=await axios.post('http://localhost:6001/api/industries/upload',data)
    return response.status
  }catch(err){
    return err
  }
}


// export const ResetPasswordcall=async(email)=>{
//   try {
//     const response = await axios.post('/user/resetPassword', { email });
//     return response.data;
//   }catch (error) {
//     console.error('Error sending reset request:', error);
//     throw error;
//   }
// }

// export const Changepasswordcall=async(userId,oldpassword,newpassword)=>{
//   try{
//     const response=await axios.put('/user/changepassword',{userId, oldpassword, newpassword});
//     return response.data;
//   }
//   catch(error){
//     console.log('Error sending change password',error);
//     throw error;
//   }
// }