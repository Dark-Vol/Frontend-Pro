import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import './TodoList.scss'

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {todo}
        </div>
      ))}
    </div>
  )
}

export default TodoList