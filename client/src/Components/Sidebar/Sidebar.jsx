import {useState} from "react"
import Sidebar_max from "./Sidebar_max";
import Sidebar_mini from "./Sidebar_mini"
const Sidebar = () => {
    const [visible,SetVisible]=useState(true);
    const handlevisible=()=>{
        SetVisible(!visible)
    }
    return (
        visible ? <Sidebar_mini Visible={handlevisible}/> : <Sidebar_max Visible={handlevisible}/>
    )
}
export default Sidebar