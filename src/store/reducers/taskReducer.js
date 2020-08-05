import { TaskActions } from '../../constants/actions'

const initState = {
  lastDeletedTodoId: '',

  todos: [
    {
      id: '1',
      isDone: true,
      body: 'Create todo app that helps users to manage their daily tasks.',
      isMarkedToBeDeleted: false
    },
    {
      id: '2',
      isDone: true,
      body:
        'Create todo app that holds todos during the browser session. This means that tasks won`t be sent to the server or saved anywhere in the browser.',
      isMarkedToBeDeleted: false
    },
    {
      id: '3',
      isDone: false,
      body:
        'Create todo app that stores todos on the server and uses the most advanced security tools and techniques. Check my github for more, probably it`s already done;)',
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
