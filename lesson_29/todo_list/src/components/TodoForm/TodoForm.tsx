import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/TodoSlice'
import type { AppDispatch } from '../../store/store'
import './TodoForm.scss'

const TodoForm: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Що зробити?"
      />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default TodoForm
