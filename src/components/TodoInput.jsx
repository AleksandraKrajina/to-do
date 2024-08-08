
import { useState } from "react"

export default function TodoInput(props) {

  const {handleAddTodolist, todoValue, setTodoValue } = props

  return (
    <header>

     <input value={todoValue} onChange={(e) => {
      setTodoValue(e.target.value)
     }}  placeholder="Enter todo..." />
     <button onClick={() => {
      handleAddTodolist(todoValue)
      setTodoValue('')
     }}>Add</button>
             
    </header>
  )
}
