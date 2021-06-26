// this file contains all the server info
import express from "express";
import morgan from "morgan";
const app = express();
import * as https from "http";
// import axios from "axios"
import dotenv from "dotenv";
dotenv.config();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies


app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_ADDRESS);
  
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
  
    // Request headers you wish to allow
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Authorization, X-Requested-With, Content-Type"
    );
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
  
    // Pass to next layer of middleware
    next();
  });


app.get("/", (req, res) => res.send("App"));

import chats from "./src/routes/user.js";
app.use("/user", chats); // sets the paths

const PORT = process.env.PORT || 8081; // tells the port num for nodejs server


//chat server goes here
const http = https.createServer(app);

// const bodyParser = require("body-parser");

http.listen(PORT, console.log(`Server started on port number ${PORT}`));
