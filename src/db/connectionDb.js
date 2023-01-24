const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "pacidodie02",
  database: "softjobs",
  allowExitOnIdle: true,
});

module.exports = pool;
