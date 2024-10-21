let router = require('express').Router();

const authorControllerClass = require("../controllers/author")
const authorController = new authorControllerClass();

router.get("/author/:id", authorController.getAuthorByID)

module.exports = router;