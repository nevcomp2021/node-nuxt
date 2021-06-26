import express from "express"
const user = express.Router();

import pool from "../config/db.js";
import bodyParser from "body-parser"
// const bodyParser = require("body-parser");
// var cors = require('cors')

// user.use(cors()) // Use this after the variable declaration

user.use(express.json());
user.use(bodyParser.json());

//ROUTES//

//get all todos//
user.get("/allSignedUpUsers", async (req, res) => {
    try {
      //await
      //console.log("it is allsigned users", pool);
      const result = await pool.query("SELECT * from users");
      res.json(result.rows);
      return;
    } catch (err) {
      console.error(err.message);
    }
  });


// module.exports = user;
export default user