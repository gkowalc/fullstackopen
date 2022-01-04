import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incremenetVote2, addAnecdoteAction, reducer} from './reducers/anecdoteReducer'
import AnecodteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
//import {reducer} from 'reducers/anecdoteReducer'
const App = () => {



  return (
    <div>
      <h2>Anecdotes</h2>
    <AnecdoteList></AnecdoteList>
    <AnecodteForm/>
    </div>
  )
}

export default App