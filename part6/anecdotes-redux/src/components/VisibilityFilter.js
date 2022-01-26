import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const VisibilityFilter = () => {
  const dispatch = useDispatch()


  const handleChange = (event) =>{
    dispatch(filterChange(event.target.value))
  }

  const style ={
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter    
      <input  
        onChange={handleChange}
      />
      
    </div>
  )
}

export {VisibilityFilter}