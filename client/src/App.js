// eslint-disable-next-line
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"// eslint-disable-next-line
import Login from "./Pages/login/Login.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
