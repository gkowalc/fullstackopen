import { render } from '@testing-library/react'
import React, { useState, } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const  [points, setpoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})
  const [currentindex, setcurrentindex] = useState(0)
  const [selected, setSelected] = useState(0)
const [highestvalue, sethighestvalue] = useState()
  const randomSelect = () => {
    const randomElement = anecdotes[Math.floor(Math.random() * anecdotes.length)]
    setSelected(randomElement)
    setcurrentindex(anecdotes.indexOf(randomElement))
    render()
    console.log(randomElement);
  }


  
const addvote = () => {
const copy = {...points}
copy[currentindex] += 1
setpoints(copy)
//https://stackoverflow.com/questions/40561199/es6-how-to-define-functions-inside-a-const
var maxkey = Object.keys(points).reduce((a, b) => points[a] > points[b] ? a : b);

console.log(maxkey)
sethighestvalue(maxkey)
render()

}

  return (
    <div>

      <h1>Anecdote of the day</h1>
      {selected}
      <p>
      <button onClick={randomSelect}> next anecdote </button></p> 
      <p>has {points[currentindex]} votes</p>
      <p><button onClick={addvote} >Vote</button></p>
      <h1>Anecdote with most votes</h1>
      {anecdotes[highestvalue]}
      <p>has {points[highestvalue]} votes</p>

    </div>
  )
}

export default App