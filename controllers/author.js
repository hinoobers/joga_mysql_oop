const authorDbModel = require("../models/author");
const articleDbModel = require("../models/article");

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
    constructor() {
        const authors = [];
    }

    async getAuthorByID(req, res) {
        console.log(req.params.id);
        const author = await authorModel.findById(req.params.id)
        const articles = await articleModel.findMany(author)
        author["articles"] = articles;
        res.status(201).json({author})
    }
}

module.exports = authorController;