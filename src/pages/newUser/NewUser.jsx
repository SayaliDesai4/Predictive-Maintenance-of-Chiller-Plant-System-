import "./newUser.css";


export default function NewUser() {
  const add=()=>
  {
    alert("Machine Added..")
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Machine</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Machine Name</label>
          <input type="text" placeholder="Motor" />

          <div className="newUserItem">
          <label>Temperature(in degrees)</label>
          <input type="text" placeholder="90" />
     

          <div className="newUserItem">
          <label>Voltage(in volts)</label>
          <input type="text" placeholder="90" />
        </div>

        <div className="newUserItem">
          <label>Pressure(in pascal)</label>
            <input type="text" placeholder="220" />

            <div className="newUserItem">
          <label>Current(in amperes)</label>
            <input type="text" placeholder="220" />

            <div className="newUserItem">
          <label>Viberations(in hertz)</label>
            <input type="text" placeholder="15000" />

<div className="newUserItem">
            <label>Status</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">On</option>
            <option value="no">Off</option>
          </select>
          <center><button className="newUserButton" onClick={add}>Add</button></center>
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
