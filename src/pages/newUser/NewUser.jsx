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
          <input type="text" placeholder="machine name" />
          <div className="newUserItem">
          <label>Image</label>
          <input type="file" id="file" />

          <div className="newUserItem">
          <label>Temperature</label>
          <input type="text" placeholder="degrees" />
     

          <div className="newUserItem">
          <label>Voltage</label>
          <input type="text" placeholder="volts" />
        </div>

        <div className="newUserItem">
          <label>Pressure</label>
            <input type="text" placeholder="pascal" />

            <div className="newUserItem">
          <label>Current</label>
            <input type="text" placeholder="amperes" />

            <div className="newUserItem">
          <label>Viberations</label>
            <input type="text" placeholder="hertz" />

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
        </div>
        
      </form>
    </div>
  );
}
