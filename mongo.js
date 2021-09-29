const mongoose = require('mongoose')
<<<<<<< HEAD
global.TextEncoder = require("util").TextEncoder; 
=======
>>>>>>> phonebook_backend
if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://kasdja17kkaa1111:${password}@cluster0.eqb3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)

<<<<<<< HEAD
const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
=======
const PersonSchema = new mongoose.Schema({
  name: String,
  date: Date,
  number: Integer,
})

const Person = mongoose.model('Note', PersonSchema)

const person = new Person({
  name: "Firstname Lastname",
  date: new Date(),
  number: 945745473,
})

person.save().then(result => {
  console.log('added!' + person.name + person.number + "To the phonebook")
  mongoose.connection.close()
})


>>>>>>> phonebook_backend
