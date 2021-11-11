import "./productList.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  return (
    <div class="productList">
    <div>
      <div>
        <h2>Machines</h2><br/>
        <table id="macs">
          
            <tr>
              <th style={{textAlign:"center"}}>ID</th>
              <th style={{textAlign:"center"}}>Name</th>
              <th style={{textAlign:"center"}}>Status</th>
              <th style={{textAlign:"center"}}>Action</th>
            </tr>
          
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td style={{textAlign:"center"}}>{index + 1}</td>
                <td style={{textAlign:"center"}}>{user.macname}</td>
                <td style={{textAlign:"center"}}>{user.macstat}</td>
                <td style={{textAlign:"center"}}>
                  <Link  to={`/users/${user.id}`}>
                   <button> View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  
  );
};

export default ProductList;