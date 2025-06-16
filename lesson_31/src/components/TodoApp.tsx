import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  loadTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos
} from '../store/actions';
import { EditableText } from './EditableText';
import type { Todo } from '../store/types';

interface RootState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

export const TodoApp: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state: RootState) => state);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const onAdd = () => {
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h2>TODO List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="text"
        value={text}
        placeholder="New todo"
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onAdd()}
        style={{ width: '70%', marginRight: 8 }}
      />
      <button onClick={onAdd}>Add</button>
      <button onClick={() => dispatch(clearTodos())} style={{ marginLeft: 8 }}>
        Clear All
      </button>

      <ul style={{ paddingLeft: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              listStyle: 'none',
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <EditableText
              text={todo.text}
              onChange={newText => dispatch(editTodo(todo.id, newText))}
            />
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: 'auto', color: 'red' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

