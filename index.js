const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())

var morgan = require('morgan')
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('build'))
const Person = require('./models/person')



const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelaces", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  //res.json(persons)
  Person.find({}).then(notes => {
    res.json(notes)
  })
})

app.get('/api/persons/:id', (req, response) => {
  //const person = persons.find(person => person.id == id)
  
  const id = req.params.id
console.log(id)
console.log (Person.findById({_id: id}))

  Person.findById({_id: id})
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => {
    console.log(error)
    response.status(400).send({ error: 'malformatted id' })
  })

  
  
})
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(body)
  console.log(body.name)
  if (body.name === undefined) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }
  if (body.number === undefined) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

 // function contains(arr, key, val) {
 //   for (var i = 0; i < arr.length; i++) {
  //      if(arr[i][key] === val) return true;
   // }
    //return false;
//}
 //  var results = persons.filter(x => x.name == body.name)
  console.log("name", body.name)
  //if(contains(persons, "name", body.name )) {
  //  
  //  return response.status(400).json({ 
  //    error: 'content already existing' 
  //  })}
   

  const person = new Person ( {
    name: body.name,
    date: new Date(),
    id: generateId(),
    number: body.number
  })
  // persons = persons.concat(person)
  person.save().then(savedNote => {
    response.json(savedNote)
  })
 
})
app.get('/info', (req, res) => {

console.log(res.json.persons)
 const note = Math.max.apply(Math, persons.map(function(o) { return o.id; }))
 const date =  Date().toLocaleString("en-US", {timeZone: "America/New_York"})
 res.send(`Phonebook has info for ${note} people <br/> ${date}` )
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})