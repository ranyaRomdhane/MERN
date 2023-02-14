const express = require("express");
const cors = require("cors");
const app = express();
const Dbconnect= require("./DB_connect");
require("dotenv").config();
Dbconnect();

app.use(express.json());
app.use(cors());
app.use('/Games',require("./Routes/gameRouter"))


app.listen(5001,(err) => { 
err ? console.log(err) : console.log("server is running");
});

 