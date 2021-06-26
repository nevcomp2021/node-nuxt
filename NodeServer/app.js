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



app.get("/", (req, res) => res.send("App"));

import chats from "./src/routes/user.js";
app.use("/user", chats); // sets the paths

const PORT = process.env.PORT || 8081; // tells the port num for nodejs server


//chat server goes here
const http = https.createServer(app);

// const bodyParser = require("body-parser");

http.listen(PORT, console.log(`Server started on port number ${PORT}`));
