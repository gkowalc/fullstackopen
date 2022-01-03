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
      data: {id: id_param}
      
    }
  }
  const vote = (id) => {
    console.log('vote', id)
    dispatch(incremenetVote2(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App