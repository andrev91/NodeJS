const yargs = require('yargs')
const fs = require("fs")

yargs.command('add','add a new note',
    function(yargs) {
        return yargs.options(
            'title', {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        }).options(
            'body', {
            describe: 'Note body',
            type: 'string',
            demandOption: true
        })
    }, 
    function(argv) {
        console.log('Adding Note with the following title: ' + argv.title + '\n' + 'Body: ' + argv.body)
        var jsonData = {}
        jsonData['Title'] = argv.title
        jsonData['Body'] = argv.body
        fs.writeFileSync('../notes/' + argv.title + '.json', JSON.stringify(jsonData))
    }
)

yargs.command('remove','remove a new note',
    function(yargs) {
        return yargs.options(
            'title', {
            describe: 'Note title',
            type: 'string',
            demandOption: true
        })
    }, 
    function(argv) {
        console.log('Deleting a note with the following title: ' + argv.title)
        fs.unlinkSync('../notes/' + argv.title + '.json')
    }
)

yargs.parse()

