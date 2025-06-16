import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Список TODO
      </Typography>
      <div>
        <TextField
          label="Нове завдання"
          variant="outlined"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <Button variant="contained" onClick={addTodo}>
          Додати
        </Button>
      </div>
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default TodoList;
