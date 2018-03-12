import { connect } from 'react-redux'

export function selectBook(book) {
  // select book is an action creator, it needs to return an action
  // an object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
