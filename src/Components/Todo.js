import React, { useState } from 'react'
import './Todo.css'

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <div className='todo-container'>
      <h2>Todo React</h2>
      <div>
        <button onClick={() => addTodo(`Todo ${todos.length + 1}`)}>Add Todo</button>
        <ul>
          {todos.map((todo, index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>

      {/* <div className='inputFiled'>
        <input type='text' placeholder='Enter Product' />
        <button>Add</button>
      </div> */}
    </div>
  )
}

export default Todo