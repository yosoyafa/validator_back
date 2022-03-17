const sql = require("mssql");
const config = require("../config");

const query = async (sentence) => {
  await sql.connect(config);
  const [results] = await sql.query`${sentence}`;

  return results;
};

module.exports = {
  query,
};
