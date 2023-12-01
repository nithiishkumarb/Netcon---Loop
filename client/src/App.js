// eslint-disable-next-line
import {BrowserRouter,Route,Routes} from "react-router-dom"// eslint-disable-next-line
import Login from "./Pages/login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"
import Industries from "./Pages/Industries/Industries.jsx"
import Industry from "./Components/Particular-Industry/industry.jsx"
import ManageEnergy from "./Pages/Manage-energy/Manage-energy.jsx"
import ManageWater from "./Pages/Manage-Water/Manage-water.jsx";
import Controls from "./Pages/Controls/Controls.jsx"
import Logs from "./Pages/Logs/Logs.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/industry-netcon" element={<Industry/>}/>
        <Route path="/manage-energy" element={<ManageEnergy/>}/>
        <Route path="/manage-water" element={<ManageWater/>}/>
        <Route path="/controls" element={<Controls/>}/>
        <Route path="/logs" element={<Logs/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
