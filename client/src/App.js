import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import {useContext} from "react";
import Login from "./Pages/login/Login.jsx";
import Home from "./Pages/Home/Home.jsx"
import Industries from "./Pages/Industries/Industries.jsx"
import Industry from "./Components/Particular-Industry/industry.jsx"
import ManageEnergy from "./Pages/Manage-energy/Manage-energy.jsx"
import ManageWater from "./Pages/Manage-Water/Manage-water.jsx";
import Controls from "./Pages/Controls/Controls.jsx"
import Logs from "./Pages/Logs/Logs.jsx"
import { AuthContext } from "./context/AuthContext.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();
function App() {
  const {user}=useContext(AuthContext);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={user? <Home/> : <Login/>}/>
          <Route path="/login" element={user ? <Navigate to={"/"}/> :<Login/>}/>
          <Route path="/industries" element={user ? <Industries/>:  <Login/>}/>
          <Route path="/industry-netcon" element={user ? <Industry/> : <Login/>}/>
          <Route path="/manage-energy" element={user ? <ManageEnergy/> : <Login/>}/>
          <Route path="/manage-water" element={user ? <ManageWater/> : <Login/>}/>
          <Route path="/controls" element={user ? <Controls/> : <Login/>}/>
          <Route path="/logs" element={user ? <Logs/> : <Login/>}/>
          {/* <Route path="/forgotpassword" element= {user ? <Navigate to="/" />: <Forgotpassword/>}/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
