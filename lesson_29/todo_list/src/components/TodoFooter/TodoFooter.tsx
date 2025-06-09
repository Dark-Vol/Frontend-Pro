import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import './TodoFooter.scss'

const TodoFooter: React.FC = () => {
  const count = useSelector((state: RootState) => state.todos.todos.length)

  return <div className="todo-footer">Всего: {count}</div>
}

export default TodoFooter
