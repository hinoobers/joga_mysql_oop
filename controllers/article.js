const articleDbModel = require("../models/article");
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll();
        res.status(201).json({ articles });
    }

    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug);
        res.status(201).json({article})
    }

    async createNewArticle(req, res) {
        const body = req.body;
        console.log("Body", body);
        const article = {
            ...body,
            published: new Date().toISOString().slice(0, 19).replace("T", " ")
        }

        const articleId = await articleModel.create(article);
        res.status(201).json({
            message: `created article with id ${articleId}`,
            article: {id: articleId, ...article}
        })
    }

    async updateArticle(req, res) {
        
    }
}

module.exports = articleController;