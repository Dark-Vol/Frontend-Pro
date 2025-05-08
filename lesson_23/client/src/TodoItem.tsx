import type { Todo } from './App';

interface Props {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          marginRight: 10,
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        {todo.title}
      </span>
      <button onClick={onDelete}>❌</button>
    </li>
  );
};

export default TodoItem;
