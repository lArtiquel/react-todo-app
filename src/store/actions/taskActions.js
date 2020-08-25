import { v4 } from 'uuid'
import { TaskActions } from '../constants/actions'

export const AddTodoAction = (body) => {
  const todo = {
    id: v4(),
    body,
    isDone: false
  }
  return { type: TaskActions.ADD_TODO, payload: todo }
}

export const ToggleTodoStateAction = (id) => {
  return { type: TaskActions.TOGGLE_TODO_STATE, payload: id }
}

export const EditTodoAction = (id, body) => {
  return { type: TaskActions.EDIT_TODO, payload: { id, body } }
}

export const ToggleTodoToBeDeletedStateAction = (id) => {
  return { type: TaskActions.TOGGLE_TODO_TO_BE_DELETED_STATE, payload: id }
}

export const DeleteTodoPermanentlyAction = (id) => {
  return { type: TaskActions.DELETE_TODO_PERMANENTLY, payload: id }
}
