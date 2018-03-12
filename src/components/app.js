import React, { Component } from 'react'

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'
import Checklist from '../containers/checklist'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="book-container">
          <BookList inputClassName="booklist-search" />
          <BookDetail />
        </div>

        <div className="list-container">
          <Checklist />
        </div>
      </div>
    )
  }
}
