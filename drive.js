const fs = require('fs')
const path = require ('path')
const joinPath = path.join('/tmp/Alps-Drive')

// création d'une fonction de création de fichier temporaire
function createFolder() {

//création de fonction si le fichier n'existe pas
    function createFolderIfNeeded(exist) {

        if (!exist) {
            console.log('création du dossier : ' + path.join('/tmp/Alps-Drive'))
            return fs.promises.mkdir(joinPath)
        }
        console.log('fichier existant' + path.join('/tmp/Alps-Drive'))
    }
    existingFolder(joinPath).then(createFolderIfNeeded)
}

// création de fonction asynchrone "fichier existant"
async function existingFolder(path) {
    try {
        await fs.promises.stat(path)
        return true

    } catch (e) {
        return false
    }
}
// exportation du module createFolder
module.exports = {createFolder}