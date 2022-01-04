
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incremenetVote2, addAnecdoteAction, reducer} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

const anecdotes = useSelector(state => state)
const dispatch = useDispatch()


const vote = (id) => {
  console.log('vote', id)
  dispatch(incremenetVote2(id))
}

const anecnotes_sorted = anecdotes.sort((a,b) => (b.votes - a.votes))
return (
    <div>
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
    </div>
)

}
export default AnecdoteList;