const express = require('express')
const app = express()
app.use(express.json())


let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
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
  res.json(persons)
  
})


app.get('/info', (req, res) => {

console.log(res.json.persons)
 const note = Math.max.apply(Math, persons.map(function(o) { return o.id; }))
 const date =  Date().toLocaleString("en-US", {timeZone: "America/New_York"})
 res.send(`Phonebook has info for ${note} people <br/> ${date}` )
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})