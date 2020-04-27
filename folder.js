const fs = require('fs')
const driveFolder = '/tmp/Alps-Drive'

//fonction asynchrone pour lister les dossiers
const listFolder = async (path) => {
    const option = {withFileTypes: true}
    const itemsInfo = await fs.promises.readdir(driveFolder + '/' + path, option)
    return itemsInfo.map(item => transformToAlpsItem(item))
}

// focntion pour transformer si c'est un dossier c'est bon sinon faux
function transformToAlpsItem(item) {
    if (item.isDirectory()) {
        return {name: item.name, isFolder: true}
    } else {
        return {name: item.name, isFolder: false}
    }
}

// fonction asynchrone qui va créer un dossier
const createFolder = async (folderName) => {
    await fs.promises.mkdir(driveFolder + '/' + folderName, {recursive: true})
}

module.exports.listFolder = listFolder
module.exports.createFolder = createFolder