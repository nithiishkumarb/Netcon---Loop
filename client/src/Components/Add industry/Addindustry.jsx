import { useRef } from "react";
import "./Addindustry.css";
import {Industry_add_call} from "../../apicalls"
import CloseIcon from '@mui/icons-material/Close';
const Addindustry = ({add_industry}) => {
  const name=useRef();
  const place=useRef();
  const generatorid=useRef();
  const tankid=useRef();
  const renderOptions = (count) => {
    const options = [];
    for (let i = 1; i <= count; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    const industry={
      name:name.current.value,
      place:place.current.value,
      generatorid:generatorid.current.value,
      tankid:tankid.current.value,
    }
    Industry_add_call(industry).then((response)=>{
      try{
        if(response){
          add_industry();
          window.location.reload();
        }
        console.log(response)
      }catch(err){
        console.log(err)
      }
    })
  }
  return (
    <div className="add_industry">
    <div className="add_industry_container">
      <div className="icons_container">
        <CloseIcon className="close_icons" onClick={add_industry}/>
      </div>
      <h3>Add Industry</h3>
      <form className="form_container" onSubmit={handlesubmit}>
        <div className="form_input">
          <label htmlFor="input1">Enter a Name:</label>
          <input type="text" placeholder="Name" ref={name} required/>
        </div>
        <div className="form_input">
          <label htmlFor="input2">Enter a Location:</label>
          <input type="text" placeholder="Location" ref={place} required/>
        </div>
        <div className="form_input">
          <label htmlFor="Generator">Generator ID:</label>
          <select id="Generator" name="Generator" ref={generatorid} required>
            {renderOptions(7)}
          </select>
        </div>
        <div>
          <label htmlFor="dropdown2">Tank ID:</label>
          <select id="dropdown2" name="dropdown2" ref={tankid} required>
            {renderOptions(7)}
          </select>
        </div>
        <div className="button_container">
          <button type="submit" className="submit_button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Addindustry;
