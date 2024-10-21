const BaseSQLModel = require("./base");

class ArticleModel extends BaseSQLModel {
    constructor() {
        super("article");
    }

    async findAll() {
        return super.findAll();
    }

    async findOne(slug) {
        const a = await super.findOne('slug', slug)
        return a;
    }
}

module.exports = ArticleModel;