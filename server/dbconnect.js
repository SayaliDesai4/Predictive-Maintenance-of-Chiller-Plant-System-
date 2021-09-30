/*const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "aashita", 
    database: "Machines"
});

connection.connect(function(err) {  
    if (err) throw err;  
    console.log("Connected!");  
  });  

module.exports= connection;
*/

const mysql = require('mysql');
const express=require("express");
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "aashita", 
    database: "Machines",
});

app.post('/NewUser/add',(req,res)=>{
const macname=req.body.macname;
const macimg=req.body.macimg;
const mactemp=req.body.mactemp;
const macvolt=req.body.macvolt;
const macpres=req.body.macpres;
const maccur=req.body.maccur;
const macvibret=req.body.macvibret;
const macstat=req.body.macstat;

  db.query(
    "insert into Machines.mac(macname, macimg, mactemp, macvolt,macpres, maccur, macvibret,macstat) values (?,?,?,?,?,?,?,?)",
    [macname, macimg, mactemp, macvolt,macpres, maccur,macvibret,macstat],
    (err,result)=>{
    console.log(err);
  }
  );
});

app.listen(3001,()=>{
  console.log("running server")
})

