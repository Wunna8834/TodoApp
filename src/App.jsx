import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AddTodo } from './components/AddTodo'
import { TodoLists } from './components/TodoLists'


function App() {
  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("My_Todos");
    if(localValues == null) return []
    return JSON.parse(localValues);
  })

  const addToDos = (title) => {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }
  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const deleteToDo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  useEffect(() => {
    localStorage.setItem("My_Todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div className="flex justify-center w-full mt-5">
      <div>
        <AddTodo onSubmit={addToDos}/>
        <h3 className='font-semibold text-2xl text-center mt-6 mb-3 '>My Todo Lists</h3>
        {todos.length === 0 && <p className='text-red-600 text-center font-bold text-2xl'>No Task! Do Some Fucking Thing</p>}
        <TodoLists todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteToDo}/>
      </div>
    </div>
  )
}

export default App
