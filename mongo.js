const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://kasdja17kkaa1111:${password}@cluster0.eqb3i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)
const PersonSchema = new mongoose.Schema({
  name: String,
  date: Date,
  number: Number
})

const Person = mongoose.model('Note', PersonSchema)

const person = new Person({
  name: "Firstname Lastname",
  date: new Date(),
  number: 945745473,
})

person.save().then(result => {
  console.log('added!!' + person.name + person.number + "To the phonebook")
  mongoose.connection.close()
})

