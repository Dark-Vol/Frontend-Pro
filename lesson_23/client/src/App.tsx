import { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = "http://localhost:3000/api/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  const fetchTodos = async (): Promise<void> => {
    try {
      const res = await axios.get<Todo[]>(API_URL);
      setTodos(res.data);
    } catch (err) {
      alert("Error loading todos");
    }
  };

  const addTodo = async (): Promise<void> => {
    if (!title.trim()) return;
    await axios.post(API_URL, { title });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (todo: Todo): Promise<void> => {
    await axios.put(`${API_URL}/${todo.id}`, {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const deleteTodo = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>TODO List</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
