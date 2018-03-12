import { combineReducers } from 'redux'
import BooksReducer from './books'
import ActiveBookReducer from './active-book'
import ListReducer from './checklist'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  list: ListReducer
})

export default rootReducer

/*
Notes:
  - a reducer is simply a function that returns a piece of object data from the store
*/
