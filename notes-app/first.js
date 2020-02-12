
const chalk = require('chalk')
const notesUtil = require('./notes.js')
const yargs = require('yargs')

//Creating Add Command
yargs.command('read','read a note',
    function(yargs) {
       return yargs.options('title',
       {describe: 'Note title', type: 'string', demandOption: true})
    },
    function(argv) {
        console.log('Reading a Note!')    
        notesUtil.readNotes(argv.title)
    }
)

yargs.command('remove','remove a new note',
    function() {
    console.log('Removing a Note!')
})

yargs.command('list','listing a new note',
    function() {
    console.log('List a Note!')
})

yargs.command('add','reading a new note',
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
        console.log('Title: ' + argv.title + '\n' + 'Body: ' + argv.body)
        notesUtil.addNotes(argv.title, argv.body)
    }
)

yargs.parse()
// console.log(chalk.green.inverse.bold(notesUtil() + chalk.red.inverse(' But He just Left.')))




