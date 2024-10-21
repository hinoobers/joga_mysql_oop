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

    async findMany(author) {
        const result = await super.findMany("author_id", author.id);
        return result;
    }
}

module.exports = ArticleModel;