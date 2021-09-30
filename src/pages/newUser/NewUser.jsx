import "./newUser.css";
import React, {useState} from "react";
import Axios from 'axios';

export default function NewUser() {
  const[machineNameReg,setMachineNameReg]=useState('');
  const[machineTemp,setMachineTemp]=useState('');
  const[machineVolt,setMachineVoltage]=useState('');
  const add=()=>
  {
    Axios.post('http://localhost:3001/add',{
      machinename: machineNameReg,
    machinetemp: machineTemp,
    machinevolt: machineVolt
  }).then((response)=>{
      console.log(response);
   });
    
  };
  
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Machine</h1>
      <form className="newUserForm" action="/server/dbconnect">
        <div className="newUserItem">
          <label>Machine Name</label>
          <input type="text" placeholder="machine name" onChange={(e)=>{setMachineNameReg(e.target.value)} }/>
          </div>
         

          <div className="newUserItem">
          <label>Temperature</label>
          <input type="text" placeholder="degrees" onChange={(e)=>{setMachineTemp(e.target.value)}} />
          </div>
     

          <div className="newUserItem">
          <label>Voltage</label>
          <input type="text" placeholder="volts" onChange={(e)=>{setMachineVoltage(e.target.value)} } />
        </div>

       

          <center><button className="newUserButton" onClick={add}>Add</button></center>
                
        
        
      </form>
    </div>
  );
}
