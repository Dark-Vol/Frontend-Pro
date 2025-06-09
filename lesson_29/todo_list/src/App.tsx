import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import TodoFooter from './components/TodoFooter/TodoFooter'
import './app.scss'

function App() {

  return (
    <React.StrictMode>
    <Provider store={store}>
      <h1>TODO</h1>
      <TodoForm />
      <h2>TODOS</h2>
      <TodoList />
      <TodoFooter />
    </Provider>
  </React.StrictMode>
  )
}

export default App
