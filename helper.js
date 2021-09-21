const getOffset = (currentPage = 1, listPerPage) => {
  return (currentPage - 1) * [listPerPage];
};

const emptyOrRows = (rows) => {
  if (!rows) {
    return [];
  }
  return rows;
};

const emptyOrSingle = (rows) => {
  if (!rows) {
    return {};
  }
  return rows[0];
};

module.exports = {
  getOffset,
  emptyOrRows,
  emptyOrSingle,
};
