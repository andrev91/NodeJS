const fileModule = require("fs")

const getNotes = function(title) {
    return fileModule.readFileSync('"' + title + ".txt", "utf8")
}

const addNotes = function(title, body) {
    var jsonData = {}
    jsonData['Title'] = title
    jsonData['Body'] = body
    fileModule.writeFileSync('../notes/' + title + '.json', JSON.stringify(jsonData))
}

const readNotes = function(title, attribute = '') {
    try {
        file = getJsonFile(title)
        console.log(attribute.length === 0 ? file : attribute + ': ' + file["" + attribute + ""])
    } catch (e) {
        console.log('Unable to retrieve note!')    
    }
}

const getJsonFile = function(title) {
    const data = fileModule.readFileSync('../notes/' + title + '.json')
    return JSON.parse(data)
}

const saveNotes = function(notes) {
    fileModule.writeFileSync('../notes/' + title + '.json', JSON.stringify(notes))
}

module.exports = {
    'getNotes' : getNotes,
    'addNotes' : addNotes,
    'readNotes' : readNotes
}


