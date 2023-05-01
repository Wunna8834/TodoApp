import React, { useEffect, useState } from 'react'
export const AddTodo = ({onSubmit}) => {
  const [newItem, setNewItem] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if(newItem === '') return
    onSubmit(newItem)
    setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit} action="">
        <input value={newItem} onChange={e => setNewItem(e.target.value)} className='border-2 border-violet-600 focus:border-violet-700 focus:outline-none focus:ring-1 ring-violet-100 rounded p-1 w-72 md:w-96' type="text" id='todo' placeholder='Add your tasks here...' />
        <button disabled={newItem === ""} className='bg-violet-600 hover:bg-violet-700 rounded px-4 py-1.5 text-white ms-1 disabled:opacity-60'>Add</button>
    </form>
  )
}
