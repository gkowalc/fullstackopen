import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incremenetVote2, addAnecdoteAction, reducer} from './reducers/anecdoteReducer'
//import {reducer} from 'reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()


  const vote = (id) => {
    console.log('vote', id)
    dispatch(incremenetVote2(id))
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