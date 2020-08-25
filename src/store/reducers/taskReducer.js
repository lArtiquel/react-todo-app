import { TaskActions } from '../constants/actions'

const initState = {
  lastDeletedTodoId: '',
  todos: [
    {
      id: '0',
      isDone: true,
      body:
        'Create todo app that helps users to manage their daily tasks. Todos must be saved in browser storage.',
      isMarkedToBeDeleted: false
    },
    {
      id: '1',
      isDone: true,
      body: 'Create todo examples (this could be your todos).',
      isMarkedToBeDeleted: false
    },
    {
      id: '2',
      isDone: true,
      body:
        'Create todo app that stores todos on the server and uses the most advanced security tools and techniques. Check my github for more.',
      isMarkedToBeDeleted: false
    }
  ]
}

export default function TaskReducer(state = initState, action) {
  switch (action.type) {
    case TaskActions.ADD_TODO: {
      return {
        ...state,
        todos: [
          {
            ...action.payload,
            isMarkedToBeDeleted: false
          },
          ...state.todos
        ]
      }
    }

    case TaskActions.TOGGLE_TODO_STATE: {
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload)
              return {
                ...todo,
                isDone: !todo.isDone
              }
            return todo
          })
        ]
      }
    }

    case TaskActions.EDIT_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id)
              return {
                ...todo,
                body: action.payload.body
              }
            return todo
          })
        ]
      }
    }

    case TaskActions.TOGGLE_TODO_TO_BE_DELETED_STATE: {
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload)
              return {
                ...todo,
                isMarkedToBeDeleted: !todo.isMarkedToBeDeleted
              }
            return todo
          })
        ],
        lastDeletedTodoId:
          action.payload === state.lastDeletedTodoId ? '' : action.payload
      }
    }

    case TaskActions.DELETE_TODO_PERMANENTLY: {
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
        lastDeletedTodoId:
          action.payload === state.lastDeletedTodoId
            ? ''
            : state.lastDeletedTodoId
      }
    }

    default:
      return {
        ...state
      }
  }
}
