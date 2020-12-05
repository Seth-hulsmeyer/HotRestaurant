const Table = require("./tableData");

class WaitList extends Table {
  constructor(name, number, email, id) {
    super(name, number, email, id);
  }
}

module.exports = WaitList;
