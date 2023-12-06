const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FullStackJavaScriptQAP3",
  password: "Skiff_21",
  port: 5432,
});

module.exports = pool;
