import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./style.css";
import {useContext} from "react";
import {Sidebar,AddIndustry} from "./Components/index.js"
import {Login,Home,Users,Industries,Industry,ManageEnergy,ManageWater,Controls,Logos} from "./Pages/index"
import { AuthContext } from "./context/AuthContext.js";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();
function App() {
  const {user}=useContext(AuthContext);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {user ? <Sidebar/>: null }
          <Routes>
            <Route path="/" exact element={user? <Home/> : <Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/industries" element={user ? <Industries/>:  <Login/>}/>
            <Route path="/users" element={user ? <Users/>:  <Login/>}/>
            <Route path="/industry-netcon" element={user ? <Industry/> : <Login/>}/>
            <Route path="/manage-energy" element={user ? <ManageEnergy/> : <Login/>}/>
            <Route path="/manage-water" element={user ? <ManageWater/> : <Login/>}/>
            <Route path="/controls" element={user ? <Controls/> : <Login/>}/>
            <Route path="/add_industry" element={user ? <AddIndustry/> : <Login/>}/>
            <Route path="/logs" element={user ? <Logos/> : <Login/>}/>
            {/* <Route path="/forgotpassword" element= {user ? <Navigate to="/" />: <Forgotpassword/>}/> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}
export default App;
