import { createStore, applyMiddleware, compose } from 'redux'
import debounce from 'lodash.debounce'
import RootReducer from './reducers/rootReducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose
const enhancer = composeEnhancers(applyMiddleware())

// load prev state function
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

// save current state function
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log('State is not serializable!')
  }
}

// create store and apply compose emhancers
const store = createStore(RootReducer, loadState(), enhancer)

store.subscribe(
  debounce(() => {
    saveState({
      task: {
        ...store.getState().task,
        lastDeletedTodoId: '',
        todos: store
          .getState()
          .task.todos.filter((todo) => todo.isMarkedToBeDeleted === false) // don't save `marked to be deleted` todos
      }
    })
  }, 1000)
)

export default store
