import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./types/types";
import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task: string) => {
    setTodos(prev => [...prev, { text: task, completed: false }]);
  };

  const deleteTodo = (index: number) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  const editTodo = (index: number, newText: string) => {
    setTodos(prev => prev.map((todo, i) => i === index ? { ...todo, text: newText } : todo));
  };

  const toggleComplete = (index: number) => {
    setTodos(prev => prev.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
  };

  const filteredTodos = todos.filter(todo =>
    filter === "all" ? true : filter === "active" ? !todo.completed : todo.completed
  );

  return (
    <div className="todo-app">
      <h1>TODO List</h1>
      <TodoForm onAdd={addTodo} />
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>Усі</button>
        <button onClick={() => setFilter("active")}>Активні</button>
        <button onClick={() => setFilter("completed")}>Завершені</button>
      </div>
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
