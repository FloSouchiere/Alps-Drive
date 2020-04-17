const express = require("express")
const app = express()

app.use(express.static("frontend"))

module.exports = {
    start: () => {
        app.listen(3000, () => {
            console.log("lListening on http://localhost:3000")
        })

    }}