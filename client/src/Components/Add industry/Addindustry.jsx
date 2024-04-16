import { useRef } from "react";
import "./AddIndustry.css";
import {Industry_add_call} from "../../ApiCalls"
import CloseIcon from '@mui/icons-material/Close';
const AddIndustry = ({add_industry}) => {
  const name=useRef();
  const place=useRef();
  const generatorId=useRef();
  const tankId=useRef();
  const renderOptions = (count) => {
    const options = [];
    for (let i = 1; i <= count; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const industry={
      name:name.current.value,
      place:place.current.value,
      generatorId:generatorId.current.value,
      tankId:tankId.current.value,
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
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="form_input">
          <label htmlFor="input1">Name:</label>
          <input type="text" placeholder="Enter a Name" ref={name} required/>
        </div>
        <div className="form_input">
          <label htmlFor="input2">Location:</label>
          <input type="text" placeholder="Enter a Location" ref={place} required/>
        </div>
        <div className="form_input">
          <label htmlFor="Generator">Generator ID:</label>
          <select id="Generator" name="Generator" ref={generatorId} required>
            {renderOptions(7)}
          </select>
        </div>
        <div>
          <label htmlFor="dropdown2">Tank ID:</label>
          <select id="dropdown2" name="dropdown2" ref={tankId} required>
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

export default AddIndustry;
