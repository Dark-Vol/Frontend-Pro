import { useState } from "react";
import type { Todo } from "../types/types";
import { motion, AnimatePresence } from "framer-motion";

type TodoListProps = {
  todos: Todo[];
  onDelete: (index: number) => void;
  onEdit: (index: number, newText: string) => void;
  onToggleComplete: (index: number) => void;
};

const TodoList = ({ todos, onDelete, onEdit, onToggleComplete }: TodoListProps) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = (index: number, text: string) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleEditSubmit = (index: number) => {
    if (editText.trim().length >= 5) {
      onEdit(index, editText);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <ul className="todo-list">
      <AnimatePresence>
        {todos.map((todo, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={todo.completed ? "completed" : ""}
          >
            {editIndex === index ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleEditSubmit(index)}
                onKeyDown={(e) => e.key === "Enter" && handleEditSubmit(index)}
                autoFocus
              />
            ) : (
              <span onClick={() => handleEdit(index, todo.text)}>{todo.text}</span>
            )}
            <div>
              <button onClick={() => onToggleComplete(index)}>
                {todo.completed ? "↩" : "✔"}
              </button>
              <button onClick={() => onDelete(index)}>❌</button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
