import React from 'react'
import useField from '../hooks/index'

const CreateNew = (props) => {
    const {resetValue: resetContent, ...content} = useField('text')
    const {resetValue: resetAuthor, ...author} = useField('text')
    const {resetValue: resetInfo, ...info} = useField('text')
  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content,
        author,
        info,
        votes: 0
      })
    }

    const handleReset =() =>{
      resetContent()
      resetAuthor()
      resetInfo()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name='content' {...content} />
          </div>
          <div>
            author
            <input name='author' {...author} />
          </div>
          <div>
            url for more info
            <input name='info' {...info} />
          </div>
          <button type="submit" onClick={handleSubmit}>create</button>
          <button type="button" onClick={handleReset}>reset</button>
        </form>
      </div>
    )
}

export { CreateNew }