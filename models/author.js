const BaseSQLModel = require("./base");

class AuthorModel extends BaseSQLModel {
    constructor() {
        super("author");
    }

    async findAll() {
        return super.findAll();
    }
}

module.exports = AuthorModel;