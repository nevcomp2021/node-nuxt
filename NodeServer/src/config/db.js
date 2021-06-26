import pg from "pg";
// const { Pool } = pg;
// const { native, Client } = pg;
// const Pool = require('pg').Pool;

const pool = new pg.Pool({
  user: "postgres",
  password: "root",
  database: "userdb",
  host: "localhost",
  port: 5432,
});

// console.log(pool);
// if(pool){ // mysql is started && connected successfully.
//     console.log('Connection Success');
// const data = (pool.query("Select * from users"))
// console.log("this is data", data);
//  }else{
//     console.log('Cant connect to db, Check ur db connection');
//  }

// module.exports = pool;
export default pool;
//if pg pool does not respond check node version - https://github.com/brianc/node-postgres/issues/2180
