const mysql = require('mysql');
const express=require("express");
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root", 
    database: "NewMachine",
});

app.post('/add',(req,res)=>{
const machinename=req.body.machinename;
const machinetemp=req.body.machinetemp;
const machinevolt=req.body.machinevolt;

  db.query(
    "insert into NewMachine.mymachine (machinename,machinetemp,machinevolt) values (?,?,?)",
    [machinename, machinetemp, machinevolt],
    (err,result)=>{
    console.log(err);
  }
  );
});

app.listen(3001,()=>{
  console.log("running server")
})

