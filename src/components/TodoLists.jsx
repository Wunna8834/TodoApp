import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoLists = ({todos, toggleTodo, deleteToDo}) => {
  return (
    <ul>
        {todos.map(todo =>
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteToDo={deleteToDo}/> 
        )}
    </ul>
  )
}
