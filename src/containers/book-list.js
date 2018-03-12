import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/select-book'
import { bindActionCreators } from 'redux'
import '../../styles/_book-list.scss'

class BookList extends Component {
  static propTypes = {
    books: React.PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      initialData: this.props.books,
      filteredData: this.props.books
    }
  }

  renderBookList(selectBook) {
    return this.state.filteredData.map(book => {
      return (
        <li onClick={event => selectBook(book)} key={book.id} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  filterBookList(e) {
    e.preventDefault()
    const regex = new RegExp(e.target.value, 'i')
    const filtered = this.state.initialData.filter(string => {
      if (string.title.search(regex) > -1) {
        return string
      }
    })

    this.setState({
      filteredData: filtered
    })
  }

  render() {
    const { inputClassName, selectBook, activeBook } = this.props

    return (
      <div className="book-list">
        <input
          className={inputClassName}
          type="text"
          placeholder="Search for book..."
          onChange={e => this.filterBookList(e)}
        />

        <br />

        <ul className="list-group col-sm-4">{this.renderBookList(selectBook)}</ul>

        {activeBook && (
          <a className="book-list__clear" href="#" onClick={() => this.selectBook('')}>
            Clear Active Book
          </a>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned from here, shows up as props in BookList
  return {
    books: state.books,
    activeBook: state.activeBook
  }
}

// Anything returned from this function will end up as props on the BookList container, which are called within the render function as methods
function mapDispatchToProps(dispatch) {
  // when selectBook is called the result should be passed to all of our reducers
  return bindActionCreators(
    {
      selectBook // key is the select-book action
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
