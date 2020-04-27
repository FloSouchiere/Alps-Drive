const express = require("express")
const folder =  require ('./folder')
const app = express()

// utilisation des fichiers statiques du frontend
app.use('/', express.static('./frontend/JS_alps-drive-project-frontend'))

// accueil
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.send('Welcome on Board')
})

// récuperation du fichier "name"
app.get('/api/drive/:name?',  async function (req, res) {
try {
const file = await folder.listFolder(req.params.name || '')
res.send(file)
}
catch (error){
    console.log(error)
    res.status(300).send('Ne marche pas')
}
})

// création d'un dossier
app.post('/api/drive', async function (req, res) {
    try {
        await folder.createFolder(req.query.name)
        console.log('ok')
        res.send('Créer')
    }
    catch (e) {
        res.send('Ne se créer pas !')
    }
})

// gestion des routes
app.use(function (req, res, next) {
    res.setHeader('Confert-Type', 'text/plain')
    res.status(404).send('404 not Found !')
})

// démarrage du serveur et écoute du port 3000
function start() {
    app.listen(3000, function () {
        console.log('Balance ton port 3000')
    })
}
module.exports = {start}