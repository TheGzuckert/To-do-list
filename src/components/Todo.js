import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });


const submiteUpdate = value => {
  updateTodo(edit.id, value)
  setEdit({
    id: null,
    value: ''
  })
}

if (edit.id) {
  return <TodoForm edit={edit} onSubmit={submiteUpdate} />
}


  return todos.map((todo, index) => (
    <div
      className={todo.isComplet ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'></div>
      <RiCloseCircleLine 
      onClick={() => removeTodo(todo.id)}
      className='delete-icon'
      />
      <TiEdit 
      onClick={() => setEdit({ id: todo.id, value: todo.text})}
      className='edite-icon' 
      />
    </div>
  ));
}

export default Todo

