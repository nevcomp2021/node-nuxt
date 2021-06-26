/* eslint-disable */
import axios from "axios";
const remoteServer = process.env.API_END;
const USERS_URL = remoteServer + "user/";
const APP = remoteServer + "";

class Postservice {

  static getActiveUsers() {
    const url = USERS_URL + "allSignedUpUsers"; // in app.js in
    return axios.get(url);
  }

}

export default Postservice;
