const express = require("express");
const bodyparser = require("body-parser")

const app = express()
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

const articleControllerClass = require("./controllers/article")
const articleController = new articleControllerClass();

const articleRoutes = require("./routes/article")
app.use("/", articleRoutes)

const authorRoutes = require("./routes/author")
app.use("/", authorRoutes)

app.listen(3000, () => {
    console.log("Listening on port 3000")
});