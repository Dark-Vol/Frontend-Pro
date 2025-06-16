import type { Todo } from './types';
import * as types from './actionTypes';

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

type Action = 
  | ReturnType<typeof import('./actions').loadTodos>
  | ReturnType<typeof import('./actions').loadTodosSuccess>
  | ReturnType<typeof import('./actions').loadTodosFailure>
  | ReturnType<typeof import('./actions').addTodoSuccess>
  | ReturnType<typeof import('./actions').deleteTodoSuccess>
  | ReturnType<typeof import('./actions').toggleTodoSuccess>
  | ReturnType<typeof import('./actions').editTodoSuccess>
  | ReturnType<typeof import('./actions').clearTodosSuccess>;

export function todoReducer(state = initialState, action: Action): TodoState {
  switch (action.type) {
    case types.LOAD_TODOS:
      return { ...state, loading: true, error: null };
    case types.LOAD_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case types.LOAD_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case types.ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case types.TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case types.EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case types.CLEAR_TODOS_SUCCESS:
      return { ...state, todos: [] };
    default:
      return state;
  }
}
