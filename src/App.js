import React, { useState } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const handlerNameChange = (event) => {
setNewName(event.target.value)
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
      
      {persons.map(prop => <ul key={prop.id}> {prop.name} {prop.number} </ul> )}
      
    </div>
  )
}

export default App