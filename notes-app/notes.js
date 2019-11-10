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

module.exports = {
    'getNotes' : getNotes,
    'addNotes' : addNotes
}


