import { useSelector, useDispatch } from 'react-redux'
import { incremenetVote2, addAnecdoteAction, reducer} from '../reducers/anecdoteReducer'
import React from 'react'

//import {reducer} from 'reducers/anecdoteReducer'
const AnecodteForm = (event) => {

const anecdotes = useSelector(state => state)
const dispatch = useDispatch()

const add2 = () => {
    dispatch(addAnecdoteAction(event))
  }

return(
    <div>
    <h2>create new</h2>
    <form onSubmit={add2}>
      <div><input name="note" /></div>
      <button>create</button>
    </form>
    </div>
)  


}
export default AnecodteForm