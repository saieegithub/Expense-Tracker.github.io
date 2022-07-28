const express = require ("express");
const app = express();
const conn = require("./db");
const cors = require("cors");

conn.connection.on("connected",(err)=>{
  if(err){
    console.error(err);
  }else{
    console.log("connected to mongoDB");
  }
})
app.use(cors());
app.use(express.json());
app.use("/item",require("./routes/data"));






app.listen(5000,()=>{
    console.log("Server is Started");
})