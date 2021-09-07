import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')

  const handlerNameChange = (event) => {
setNewName(event.target.value)


  }

const addNewName = (event) => {
  event.preventDefault()
  const nameObject = {
    name: newName,
    date: new Date().toISOString(),
    id: persons.length + 1,
  }
  setPersons(persons.concat(nameObject))
  console.log(persons)

}  
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlerNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addNewName}>add</button>
        </div>
      </form>

      <h2>
    Numbers</h2>
      
      {persons.map(prop => <ul key={prop.id}> {prop.name}  </ul> )}
      
    </div>
  )
}

export default App