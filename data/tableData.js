class Table {
  constructor(name, number, email, id) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  getNumber() {
    return this.number;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
  }
}

module.export = Table;
