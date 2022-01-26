const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

   switch (action.type) {
   case 'NEW_ANECDOTE':
      return [...state, action.data]
      case 'INIT_ANECDOTE':
        return action.data
    case 'VOTE': {
      return state.map((anecdote) =>
        anecdote.id === action.data.id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )
    }
    default:
      return state
  }
  return state
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id },
  }
}

export const initAnecdotes = (anecdotes) =>{
return {
  type: 'INIT_ANECDOTES',
  data: anecdotes,
}
}

export default anecdoteReducer