import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
export const TodoItem = ({completed, title, id, toggleTodo, deleteToDo}) => {
  return (
    <li className='w-full bg-slate-100 rounded-md ps-2 py-3 flex justify-between mb-2'>
       <div className='flex gap-1 items-center'>
        <input className='w-4 h-4' type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
            <span className={completed? "line-through decoration-2" : ""}>{title}</span>
       </div>
        <button onClick={() => deleteToDo(id)} className='bg-red-400 hover:bg-red-500 text-white px-2 py-3 h-full rounded mr-2'><MdDeleteForever className='w-5 h-5'/></button>
    </li> 
  )
}
