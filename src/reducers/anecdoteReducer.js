const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const initialState = anecdotesAtStart.map(asObject)



export const reducer = (state = initialState, action) => {
  switch (action.type){
  case 'INCREMENT':
    console.log("hello2")
    const id = (action.data.id)
    const anectodeToVote = state.find(n => n.id === id)
    console.log(anectodeToVote)
    const incrementedAnectote = {
      ...anectodeToVote, votes: anectodeToVote.votes + 1
    }
    const anecdotes = state.map(anecdote =>
      anecdote.id !== id ? anecdote : incrementedAnectote)
      return anecdotes
    console.log(state)
  // console.log('state now: ', state)  
  // console.log('action', action)
  return state
}
  return state
}
export const incremenetVote = (id_param) => {
  console.log('hello')
  return {
    type: 'INCREMENT',
    data: {id: "kurwa"}
    
  }
}
//  case 'INCREMENT':
// var state_value_initial = state.votes
//const changed_stated_increment = {
//  ...state, votes: state_value_initial +=1
//}
//return changed_stated_increment
