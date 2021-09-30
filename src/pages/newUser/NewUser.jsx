import "./newUser.css";
import React, {useState} from "react";
import Axios from 'axios';

export default function NewUser() {
  const[machineNameReg,setMachineNameReg]=useState('');
  const[machineImg,setMachineImg]=useState('');
  const[machineTemp,setMachineTemp]=useState('');
  const[machineVolt,setMachineVolt]=useState('');
  const[machinePres,setMachinePres]=useState('');
  const[machineCurr,setMachineCurr]=useState('');
  const[machineVibret,setMachineVibret]=useState('');
  const[machineStat,setMachineStat]=useState('');

  const add=()=>
  {
    Axios.post('http://localhost:3001/NewUser/add',{
      macname: machineNameReg,
      macimg: machineImg,
    mactemp: machineTemp,
    macvolt: machineVolt,
    macpres:machinePres,
    maccur:machineCurr,
    macvibret:machineVibret,
    macstat:machineStat
    
  }).then((response)=>{
      console.log(response);
      
   });
   alert("Machine Added..");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">Machine</h1>
      <form className="newUserForm" onSubmit={add}>
        <div className="newUserItem">
          <label>Machine Name</label>
          <input type="text" placeholder="machine name" required onChange={(e)=>{setMachineNameReg(e.target.value)} } />
          <div className="newUserItem">
          <label>Image</label>
          <input type="file" id="file" required onChange={(e)=>{setMachineImg(e.target.value)} }/>

          <div className="newUserItem">
          <label>Temperature</label>
          <input type="text" placeholder="degrees" required onChange={(e)=>{setMachineTemp(e.target.value)} } />
     

          <div className="newUserItem">
          <label>Voltage</label>
          <input type="text" placeholder="volts" required onChange={(e)=>{setMachineVolt(e.target.value)} }  />
        </div>

        <div className="newUserItem">
          <label>Pressure</label>
            <input type="text" placeholder="pascal" required onChange={(e)=>{setMachinePres(e.target.value)} } />

            <div className="newUserItem">
          <label>Current</label>
            <input type="text" placeholder="amperes" required onChange={(e)=>{setMachineCurr(e.target.value)} } />

            <div className="newUserItem">
          <label>Viberations</label>
            <input type="text" placeholder="hertz" required onChange={(e)=>{setMachineVibret(e.target.value)} } />
            <div className="newUserItem">
          <label>Status</label>
            <input type="text" placeholder="On/Off" required onChange={(e)=>{setMachineStat(e.target.value)} } />

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
