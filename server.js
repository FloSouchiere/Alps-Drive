const express = require("express")
const app = express()

app.use('/', express.static("./frontend/JS_alps-drive-project-frontend"))
app.get('/', function (req, res) {

    res.setHeader("Content-Type", "text/plain")
    res.send("Vous êtes à l\'accueil")
})

app.use(function (req, res, next) {

    res.setHeader("Confert-Type", "text/plain")
    res.status(404).send("404 Not Found !")
})

function start() {
    app.listen(3000, function () {
        console.log("Balance ton port 3000")
    })
}

module.exports = {start}