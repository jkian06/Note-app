const write = require('./write')
const read = require('./read')
const add = require('./add')

const data = process.argv

console.log(read())

var note = {}

if(data[2] == 'add'){
    note = { 
        id: data[3],  
        title: data[4], 
        body: data[5]}

var oldNote = read()
add(note, oldNote)


}