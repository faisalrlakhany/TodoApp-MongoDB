import React from 'react'
import './Todo.css'

const Todo = () => {
  const show = () => {
    document.getElementById('textarea').style.display = 'block'
  }
  return (
    <div className='todo'>
      <div className='container todo-main d-flex flex-column justify-content-center align-items-center my-4 flex-column'>
        <div className='d-flex flex-column todo-input-div w-50 p-1'>
          <input
            type='text'
            placeholder='Title'
            className='my-2 p-2 todo-input '
            onClick={show}
          />
          <textarea
            id='textarea'
            type='text'
            placeholder='Body'
            className='p-2  todo-input'
          />
        </div>
        <div className='d-flex w-50 justify-content-end my-3'>
          {' '}
          <button className='home-btn px-2 py-1'>Add</button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Todo
