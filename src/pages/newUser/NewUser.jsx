import "./newUser.css";
import React, {useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const NewUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    macname: "",
    macimg: "",
    mactemp: "",  
    macvolt: "",
    macpres: "",
    maccur: "",
    macvibret: "",
    macstat: ""
  });

  const { macname, macimg,mactemp,macvolt,macpres,maccur,macvibret,macstat} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
    
    alert("Machine Added..");
  };


  return (
    <div className="newUser">
      <h1 className="newUserTitle">Machine</h1>
      <form className="newUserForm" onSubmit={e => onSubmit(e)}>
        <div className="newUserItem">
          <label>Machine Name</label>
          <input style={{boxSizing:"content-box"}} type="text" placeholder="machine name" required name="macname" value={macname} onChange={e => onInputChange(e)}/>
          <div className="newUserItem">
          <label>Image</label>
          <input style={{boxSizing:"content-box"}} type="file" id="file" required name="macimg" value={macimg} onChange={e => onInputChange(e)}/>

          <div className="newUserItem">
          <label>Temperature</label>
          <input style={{boxSizing:"content-box"}} type="text" placeholder="degrees" required name="mactemp" value={mactemp} onChange={e => onInputChange(e)} />
     

          <div className="newUserItem">
          <label>Voltage</label>
          <input style={{boxSizing:"content-box"}} type="text" placeholder="volts" required name="macvolt" value={macvolt} onChange={e => onInputChange(e)} />
        </div>

        <div className="newUserItem">
          <label>Pressure</label>
            <input style={{boxSizing:"content-box"}} type="text" placeholder="pascal" required name="macpres" value={macpres} onChange={e => onInputChange(e)} />

            <div className="newUserItem">
          <label>Current</label>
            <input style={{boxSizing:"content-box"}} type="text" placeholder="amperes" required name="maccur" value={maccur} onChange={e => onInputChange(e)}/>

            <div className="newUserItem">
          <label>Vibrations</label>
            <input style={{boxSizing:"content-box"}} type="text" placeholder="hertz" required name="macvibret" value={macvibret} onChange={e => onInputChange(e)} />
            <div className="newUserItem">
          <label>Status</label>
            <input style={{boxSizing:"content-box"}} type="text" placeholder="On/Off" required name="macstat" value={macstat} onChange={e => onInputChange(e)} />

<div className="newUserItem">
        
          <center><button type="submit" className="newUserButton" >Add</button></center>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
      </form>

    </div>

    
  );
}
export default NewUser;
