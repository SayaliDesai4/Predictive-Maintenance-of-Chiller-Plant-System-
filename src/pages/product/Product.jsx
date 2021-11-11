
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
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

    const { id } = useParams();
    useEffect(() => {
      loadUser();
    }, []);
    const loadUser = async () => {
      const res = await axios.get(`http://localhost:3003/users/${id}`);
      setUser(res.data);
    };

  return (
    
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Machine Stage</h1>        
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Units" title="Machine Performance"/>

}

          </div>

          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://th.bing.com/th/id/OIP.b44gEAehha7hq_XQfJYTPgHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" className="productInfoImg" />
              </div>
              <div className="productInfoBottom">
              <br></br>
                  <div className="productInfoItem">
                  
                      <span className="productInfoKey">Machine Name:</span>
                      <span className="productInfoValue"><b>{user.macname}</b></span>
                  </div>
                  
                  <div className="productInfoItem">
                      <span className="productInfoKey">Status:</span>
                      <span className="productInfoValue"><b>{user.macstat}</b></span>
                  </div>
                
              </div>
              
          </div>
      </div>
      
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Alerts</label>
                  <button className="productButton">Dry Run Alert</button>
                  &nbsp;
                  <button className="productButton">Leakage Alert</button>
                  &nbsp;
                  <button className="productButton">Clogging Alert</button>
                  &nbsp;
                  <button className="productButton">Low Efficiency Alert</button>
                  &nbsp;
                  <button className="productButton">Overheating Alert</button>
                  &nbsp;
              </div>
              <div className="productFormRight">
              <label>Faults</label>
                  <button className="productButton">Bearing Fault</button>
                  &nbsp;
                  <button className="productButton">Broken Rotor Bar Fault</button>
                  &nbsp;
                  <button className="productButton">Cavitation Fault</button>
                  &nbsp;
                  <button className="productButton">Gear Fault</button>
                  &nbsp;
                  <button className="productButton">Open Conductor Fault</button>
                  &nbsp;
                  
              </div>
          </form>
      </div>
    </div>
  );
};

  export default  Product;
