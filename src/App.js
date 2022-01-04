import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incremenetVote, reducer} from './reducers/anecdoteReducer'
//import {reducer} from 'reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

   const incremenetVote2 = (id_param) => {

    return {
      type: 'INCREMENT',
      data: {id: id_param
      }
      
    }
  }
  const vote = (id) => {
    console.log('vote', id)
    dispatch(incremenetVote2(id))
  }
  const addAnecdoteAction = (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''

    return {
      type: 'ADDNOTE',
      data: {
        content: content
      }
    }
  }
const anecnotes_sorted = anecdotes.sort((a,b) => (b.votes - a.votes))
const add2 = () => {
  dispatch(addAnecdoteAction(event))
}


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecnotes_sorted.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add2}>
        <div><input name="note" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App