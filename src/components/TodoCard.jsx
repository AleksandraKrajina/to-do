import React from 'react'

export default function TodoCard(props) {

  const {children, handleDeliteTodo, index, handleEditTodo} = props

  return (

    <li className='todoItem'> 
    {children}

    <div className='actionsContainer'>
     <button onClick={() => {handleEditTodo(index)
     }}> 
     <i className="fa-regular fa-pen-to-square" />
     </button> 
     <button onClick={() => { handleDeliteTodo(index)
     }}>
     <i className="fa-regular fa-trash-can"/>
     </button>

    </div>

    </li>
  )
}
