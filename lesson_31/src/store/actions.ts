import * as types from './actionTypes';
import type { Todo } from './types';

export const loadTodos = () => ({ type: types.LOAD_TODOS });
export const loadTodosSuccess = (todos: Todo[]) => ({ type: types.LOAD_TODOS_SUCCESS, payload: todos });
export const loadTodosFailure = (error: string) => ({ type: types.LOAD_TODOS_FAILURE, payload: error });

export const addTodo = (text: string) => ({ type: types.ADD_TODO, payload: { text } });
export const addTodoSuccess = (todo: Todo) => ({ type: types.ADD_TODO_SUCCESS, payload: todo });

export const deleteTodo = (id: number) => ({ type: types.DELETE_TODO, payload: id });
export const deleteTodoSuccess = (id: number) => ({ type: types.DELETE_TODO_SUCCESS, payload: id });

export const toggleTodo = (id: number) => ({ type: types.TOGGLE_TODO, payload: id });
export const toggleTodoSuccess = (todo: Todo) => ({ type: types.TOGGLE_TODO_SUCCESS, payload: todo });

export const editTodo = (id: number, text: string) => ({ type: types.EDIT_TODO, payload: { id, text } });
export const editTodoSuccess = (todo: Todo) => ({ type: types.EDIT_TODO_SUCCESS, payload: todo });

export const clearTodos = () => ({ type: types.CLEAR_TODOS });
export const clearTodosSuccess = () => ({ type: types.CLEAR_TODOS_SUCCESS });
export function addTodoFailure(message: string): any {
  throw new Error('Function not implemented.');
}

export function deleteTodoFailure(message: string): any {
  throw new Error('Function not implemented.');
}

export function toggleTodoFailure(message: string): any {
  throw new Error('Function not implemented.');
}

