import { put, takeEvery, delay, all } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';
import type{ Todo } from './types';

let fakeDB: Todo[] = [];

function* loadTodosSaga() {
  try {
    yield delay(500);
    yield put(actions.loadTodosSuccess(fakeDB));
  } catch (error) {
    yield put(actions.loadTodosFailure((error as Error).message));
  }
}

function* addTodoSaga(action: ReturnType<typeof actions.addTodo>) {
  try {
    yield delay(300);
    const newTodo: Todo = {
      id: Date.now(),
      text: action.payload.text,
      completed: false,
    };
    fakeDB.push(newTodo);
    yield put(actions.addTodoSuccess(newTodo));
  } catch (error) {
    yield put(actions.addTodoFailure((error as Error).message));
  }
}

function* deleteTodoSaga(action: ReturnType<typeof actions.deleteTodo>) {
  try {
    yield delay(200);
    fakeDB = fakeDB.filter(todo => todo.id !== action.payload);
    yield put(actions.deleteTodoSuccess(action.payload));
  } catch (error) {
    yield put(actions.deleteTodoFailure((error as Error).message));
  }
}

function* toggleTodoSaga(action: ReturnType<typeof actions.toggleTodo>) {
  try {
    yield delay(200);
    fakeDB = fakeDB.map(todo =>
      todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    );
    const toggledTodo = fakeDB.find(todo => todo.id === action.payload);
    if (toggledTodo) yield put(actions.toggleTodoSuccess(toggledTodo));
  } catch (error) {
    yield put(actions.toggleTodoFailure((error as Error).message));
  }
}

function* editTodoSaga(action: ReturnType<typeof actions.editTodo>) {
  try {
    yield delay(300);
    fakeDB = fakeDB.map(todo =>
      todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
    );
    const editedTodo = fakeDB.find(todo => todo.id === action.payload.id);
    if (editedTodo) yield put(actions.editTodoSuccess(editedTodo));
  } catch (error) {
    console.error(error);
  }
}

function* clearTodosSaga() {
  try {
    yield delay(200);
    fakeDB = [];
    yield put(actions.clearTodosSuccess());
  } catch (error) {
    console.error(error);
  }
}

function* watchTodoActions() {
  yield takeEvery(types.LOAD_TODOS, loadTodosSaga);
  yield takeEvery(types.ADD_TODO, addTodoSaga);
  yield takeEvery(types.DELETE_TODO, deleteTodoSaga);
  yield takeEvery(types.TOGGLE_TODO, toggleTodoSaga);
  yield takeEvery(types.EDIT_TODO, editTodoSaga);
  yield takeEvery(types.CLEAR_TODOS, clearTodosSaga);
}

export default function* rootSaga() {
  yield all([watchTodoActions()]);
}
