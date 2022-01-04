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

export const incremenetVote2 = (id_param) => {

  return {
    type: 'INCREMENT',
    data: {id: id_param
    }
    
  }
}
export const addAnecdoteAction = (event) => {
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

export const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type){
    case 'INCREMENT':
      const id = (action.data.id)
      const anectodeToVote = state.find(n => n.id === id)
      console.log(anectodeToVote)
      const incrementedAnectote = {
        ...anectodeToVote, votes: anectodeToVote.votes + 1
      }
      const anecdotes = state.map(anecdote =>
        anecdote.id !== id ? anecdote : incrementedAnectote)
        return anecdotes
    case 'ADDNOTE':
      const anecdote = (action.data.content)
      const anecdote_with_id = asObject(anecdote)
      return state.concat(anecdote_with_id)





}
  return state
}
export const incremenetVote = (id_param) => {
  console.log('hello')
  return {
    type: 'INCREMENT',
    data: {id: ""}
    
  }
}
//  case 'INCREMENT':
// var state_value_initial = state.votes
//const changed_stated_increment = {
//  ...state, votes: state_value_initial +=1
//}
//return changed_stated_increment
