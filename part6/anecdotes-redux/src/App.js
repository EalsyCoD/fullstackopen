import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnecdoteForm } from './components/AnecdoteForm'
import { AnecdoteList } from './components/AnecdoteList'
import { VisibilityFilter } from './components/VisibilityFilter'
import { Notification } from './components/Notification'



import { getAll } from './service/anecdotes'
import { initAnecdotes } from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      getAll().then(anecdotes => dispatch(initAnecdotes(anecdotes)))
  }, [dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <VisibilityFilter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App