import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loader from 'react-loader'
import '../../styles/_book-detail.scss'

class BookDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }

    this.options = {
      lines: 10,
      length: 10,
      width: 4,
      radius: 10,
      scale: 0.75,
      corners: 1,
      color: '#00BCD4',
      opacity: 0.25,
      rotate: 0,
      direction: 1,
      speed: 1.5,
      trail: 60,
      fps: 60,
      zIndex: 99,
      top: '-50px',
      left: '50%',
      shadow: true,
      hwaccel: false,
      position: 'absolute'
    }
  }

  render() {
    const divStyle = {
      position: 'relative'
    }
    const { activeBook } = this.props

    if (!activeBook) {
      return (
        <div className="waiting" style={divStyle}>
          <Loader loaded={this.state.loaded} options={this.options} className="spinner" />
          <div>Select a book to get started.</div>
        </div>
      )
    }

    return (
      <div className="book-detail">
        <h3>Details for:</h3>
        <p>Title: {activeBook.title}</p>
        <p>Pages: {activeBook.pages}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
