import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todolist, setTodolist] = useState([])
  const [todoValue, setTodoValue] = useState ('')

  function persistData(newList) {
    localStorage.setItem('todolist', JSON.stringify({ todolist: newList }))
  }

  function handleAddTodolist(newTodo) {
    const newTodoList = [...todolist, newTodo]
    persistData(newTodoList)
    setTodolist(newTodoList)
  }

  function handleDeliteTodo(index) {
    const newTodoList = todolist.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodolist(newTodoList)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }

    let localTodolist = localStorage.getItem('todolist')
    if (!localTodolist){
      return
    } 
    localTodolist = JSON.parse(localTodolist).todolist
    setTodolist(localTodolist)
  }, [])

  function handleEditTodo(index){
     const valueToBeEdited = todolist[index]
     setTodoValue(valueToBeEdited)
     handleDeliteTodo(index)
  }

  return (
    <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodolist={handleAddTodolist} />
        <TodoList handleEditTodo={handleEditTodo} handleDeliteTodo={handleDeliteTodo} todolist={todolist} />
    </>
  
  )
}

export default App
