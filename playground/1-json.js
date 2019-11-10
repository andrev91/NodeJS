const fs = require("fs")

const file = fs.readFileSync('1-json.json')
const jsonConversion = JSON.parse(file.toString())
console.log(jsonConversion.name)
console.log(jsonConversion.age)

jsonConversion.name = 'Andre' + Math.floor(Math.random() * 100)
jsonConversion.age = '30_' + Math.floor(Math.random() * 100)

fs.writeFileSync('1-json.json', JSON.stringify(jsonConversion))

const file2 = fs.readFileSync('1-json.json')
const jsonConversion2 = JSON.parse(file2.toString())
console.log(jsonConversion2.name)
console.log(jsonConversion2.age)