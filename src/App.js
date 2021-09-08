import React, { useState, useEffect } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [filteredArray, setFilteredArray] = useState(persons)
  
  const handlerNameChange = (event) => {
setNewName(event.target.value)
  }

  const handlerFilterChange = (event) => {
    if (newFilter.length === 0) {setFilteredArray(persons)}
    setNewFilter(event.target.value)
    setFilteredArray(persons.filter(item => item.name.toLowerCase().indexOf(newFilter) >-1 ))
      }
const handlerNumberChange = (event) => {
  setNewNumber(event.target.value)
      }
      
        
        
const addNewName = (event) => {
  event.preventDefault()

  const nameObject = {
    name: newName,
    number: newNumber,
    date: new Date().toISOString(),
    id: persons.length + 1
 
  }
console.log(nameObject)
if (persons.length > 0) {persons.filter(nametest => {if (nametest.name === nameObject.name){return    alert(newName + "is already in the phonebook"), console.log("it is true")} else 
{ console.log("it is false")
  setPersons(persons.concat(nameObject))
  
}

}
)
} else {
  setPersons(persons.concat(nameObject))
}



} 

  return (
    <div>
      <h2>Phonebook</h2>
       filter shown with 
       <div>
          name: <input value={newFilter} onChange={handlerFilterChange} />
        

        </div>
      <h2>Add a new</h2>

      <form>
        <div>
          name: <input value={newName} onChange={handlerNameChange} />
        

        </div>
  <div>number: <input value={newNumber} onChange={handlerNumberChange}/></div>

        <div>
          <button type="submit" onClick={addNewName}>add</button>
        </div>
      </form>

      <h2>
    Numbers</h2>
    
      {filteredArray.map(prop => <ul key={prop.id}> {prop.name} {prop.number} </ul> )}
      
    </div>
  )
}

export default App