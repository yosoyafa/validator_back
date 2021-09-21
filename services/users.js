const db = require("./db");
const helper = require("../helper");
const config = require("../config");

const getMultiple = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM sample_table`, [
    offset,
    config.listPerPage,
  ]);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
};

const getById = async (id, page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM sample_table WHERE id = '${id}'`, [
    offset,
    config.listPerPage,
  ]);
  const data = helper.emptyOrSingle(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
};

module.exports = {
  getMultiple,
  getById,
};
